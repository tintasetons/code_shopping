import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

const TOKEN_KEY = 'code_shopping_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(user: { email: string, password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://localhost:8000/api/login', user)
      .pipe(
        tap(response => {
          this.setToken(response.token)
        })
      );
  }

  setToken(token: string){
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }
}
