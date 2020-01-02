import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private cookieService: CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>
  {
    let token = this.cookieService.get('token');
    if (token){
      let tokenizedReq = req.clone({
        setHeaders:{
          'x-access-token': token
        }
      });

      return next.handle(tokenizedReq);
    }
    else{
      return next.handle(req);
    }
  }
}
