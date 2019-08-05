import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {UserInterface} from "../../models"
import {map} from "rxjs/operators";
import {HttpResource, SearchParams, SearchParamsBuild} from "./http-resource";

@Injectable({
  providedIn: 'root'
})

export class UserHttpService implements HttpResource<UserInterface> {

  private baseUrl = `http://localhost:8000/api/users`;

  constructor(private http: HttpClient) {

  }

  list(searchParams: SearchParams): Observable<{
    data: Array<UserInterface>, meta: any
  }> {
    const token = window.localStorage.getItem('token');
    const sParams = new SearchParamsBuild(searchParams).makeObject();
    const params = new HttpParams({
      fromObject: (<any>sParams)
    });
    return this.http
      .get<{
        data: Array<UserInterface>, meta: any
      }>
      (`${this.baseUrl}`, {
        params,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  }

  get(id: number): Observable<UserInterface> {
    const token = window.localStorage.getItem('token');
    return this.http
      .get<{ data: UserInterface }>
      (`${this.baseUrl}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(map(response => response.data));
  }

  create(data: UserInterface) {
    const token = window.localStorage.getItem('token');
    return this.http
      .post<{ data: UserInterface }>
      (`${this.baseUrl}`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(map(response => response.data));

  }

  update(id: number, data: UserInterface) {
    const token = window.localStorage.getItem('token');
    return this.http
      .put<{ data: UserInterface }>(`${this.baseUrl}/${id}`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(
        map(data => data)
      );
  }

  destroy(id: number): Observable<any> {
    const token = window.localStorage.getItem('token');
    return this.http
      .delete
      (`${this.baseUrl}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
  }


}
