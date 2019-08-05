import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        tap((event: HttpEvent<any>) => {
          console.log(event);
          this.setNewTokenIsResponseValid(event);
        })
      )

  }

 private setNewTokenIsResponseValid(event: HttpEvent<any>){
    if (event instanceof  HttpResponse){
      const authorizationHeader = event.headers.get('authorization');
      console.log(authorizationHeader);
    }
  }
}
