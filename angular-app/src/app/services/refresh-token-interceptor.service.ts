import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponseBase
} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable({
  // walter
  providedIn: 'root'
})
export class RefreshTokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        tap((event: HttpEvent<any>) => {
          console.log(event);
          this.setNewTokenIsResponseValid(event);
        }, (eventError: HttpEvent<any>) => {
          this.setNewTokenIsResponseValid(eventError);
          this.redirectTologinIfAnauthenticated(eventError);
        })
      )

  }

  private redirectTologinIfAnauthenticated(eventError: HttpEvent<any>) {
       if (eventError instanceof  HttpErrorResponse && eventError.status == 401){
          this.authService.setToken(null);
          this.router.navigate(['login']);
       }
  }

  private setNewTokenIsResponseValid(event: HttpEvent<any>) {
    if (event instanceof HttpResponseBase) {
      const authorizationHeader = event.headers.get('authorization');
      if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1];
        this.authService.setToken(token);
      }
    }
  }
}
