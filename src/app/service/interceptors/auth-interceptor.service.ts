
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpInterceptor, HttpRequest, HttpHandler,
  HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent
} from '@angular/common/http';
import { UserService } from '../user.service';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    if (!req.url.includes('login') ) {
      const token = this.userService.getToken();
      req = req.clone({
        setHeaders: { Authorization: 'Bearer ' + token }
      });
    }

    return next.handle(req);
  }
}
