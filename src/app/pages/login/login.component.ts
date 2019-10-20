import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tokenParam = 'initial value';
  pathParam = 'initial value';
  isLoginError = false;
  registerForm: FormGroup;
  submitted = false;
  mail: string;
  password: string;
  constructor(private renderer: Renderer2,
              private formBuilder: FormBuilder,
              private router: Router,
              private readonly route: ActivatedRoute,
              private userService: UserService) { }


  ngOnInit() {
    this.tokenParam = this.route.snapshot.paramMap.get('token');
    this.pathParam = this.route.snapshot.paramMap.get('route');

    if (this.tokenParam != null && this.tokenParam !== '') {
        localStorage.setItem('UserToken', this.tokenParam);
        localStorage.setItem('tokenExpiration', '30');
        // tmp
        this.router.navigate(['home']);

        // this.userService.validateToken().subscribe(( x: any) => {
        //     if (x.response === 'Success') {
        //         if (this.pathParam != null && this.pathParam !== '') {
        //             this.router.navigate(['/' + this.pathParam.replace('-', '/') ]);
        //           } else {
        //             this.router.navigate(['/dashboard']);
        //           }
        //     }
        // },
        // ( error: any ) => {
        //     this.userService.logout();
        //     console.log('No fue autorizado');
        // }
        // );


    }
    this.registerForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }



  loginUser(e) {
    e.preventDefault();
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.mail = e.target.elements[0].value;
    this.password = e.target.elements[1].value;

    this.userService.userAuthentication(this.mail, this.password).subscribe((data: any) => {
      localStorage.setItem('UserToken', data.data.auth_token);
      localStorage.setItem('tokenExpiration', data.expiration);
      this.router.navigate(['/home/dashboard']);
    },
      (err: HttpErrorResponse) => {
        if (err.error.Error !== undefined) {
          alert('Error' + err.error.Error);
        }
        this.isLoginError = true;
        e.target.elements[0].value = '';
        e.target.elements[1].value = '';
      });
  }


}
