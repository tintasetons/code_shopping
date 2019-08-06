import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {UserInterface} from "../models";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";

// console.log(environment.production);
// console.log(environment.api);
// console.log(environment.api.url);


const TOKEN_KEY = 'code_shopping_token';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  me: UserInterface = null;

  constructor(private http: HttpClient) {
    const token = this.getToken();
    this.setUserFromToken(token);
  }

  login(user: { email: string, password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.api.url}/api/login`, user)
      .pipe(
        tap(response => {
          this.setToken(response.token)
        })
      );
  }

  setToken(token: string) {
    this.setUserFromToken(token);
    token ? window.localStorage.setItem(TOKEN_KEY, token) : window.localStorage.removeItem(TOKEN_KEY);
  }

  private setUserFromToken(token: string) {
    const decodedPayload = new JwtHelperService().decodeToken(token);
    this.me = decodedPayload ? {
      id: decodedPayload.sub,
      name: decodedPayload.name,
      email: decodedPayload.email,
    } : null;
  }

  getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  isAuth() {
    const token = this.getToken();
    return !new JwtHelperService().isTokenExpired(token, 30);
  }

  logout(): Observable<any> {
    return this.http.post<{ token: string }>(`${environment.api.url}/api/logout`, {})
      .pipe(
        tap(() => {
          this.setToken(null)
        })
      );
  }
}
