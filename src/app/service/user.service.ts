import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private http: HttpClient) { }

  userAuthentication(mail, pass) {

    sessionStorage.setItem('u', mail);
    sessionStorage.setItem('p', pass);


    const reqHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    const user = {
      email: mail,
      password: pass,
      type: 'Admin'
    };
    const sampleJSON = JSON.stringify(user);

    return this.http.post(environment.apiUrl + 'login', sampleJSON, { headers: reqHeaders });
  }


  getToken(): string {
    return localStorage.getItem('UserToken');
  }

  getExpiratedToken(): string {
    return localStorage.getItem('tokenExpiration');
  }

  logout() {
    localStorage.removeItem('UserToken');
    localStorage.removeItem('tokenExpiration');
    sessionStorage.removeItem('u');
    sessionStorage.removeItem('p');
    localStorage.clear();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {

    const exp = this.getExpiratedToken();

    if (!exp) {
      // el token no existe
      return false;
    }

    const now = new Date().getTime();
    const dateExp = new Date(exp);

    if (now >= dateExp.getTime()) {// el tiempo del token expiró
      const u = sessionStorage.getItem('u');
      const p = sessionStorage.getItem('p');
      this.userAuthentication(u, p).subscribe((r: any) => {
        localStorage.setItem('UserToken', r.token);
        localStorage.setItem('tokenExpiration', r.expiration);
        return true;
      },
        (err: HttpErrorResponse) => {
          return false;
        });

    } else {
      return true;
    }

  }
}
