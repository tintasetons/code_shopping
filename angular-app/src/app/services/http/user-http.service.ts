import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {UserInterface} from "../../models"
import {map} from "rxjs/operators";
import {HttpResource, SearchParams, SearchParamsBuild} from "./http-resource";
import {environment} from "../../../environments/environment";


@Injectable({providedIn: 'root'})

export class UserHttpService implements HttpResource<UserInterface> {

  private baseUrl = `${environment.api.url}/api/users`;

  constructor(private http: HttpClient) {

  }

  list(searchParams: SearchParams): Observable<{
    data: Array<UserInterface>, meta: any
  }> {

    const sParams = new SearchParamsBuild(searchParams).makeObject();
    const params = new HttpParams({
      fromObject: (<any>sParams)
    });
    return this.http
      .get<{ data: Array<UserInterface>, meta: any }>
      (`${this.baseUrl}`, {params});
  }

  get(id: number): Observable<UserInterface> {
    return this.http
      .get<{ data: UserInterface }>
      (`${this.baseUrl}/${id}`, {})
      .pipe(map(response => response.data));
  }

  create(data: UserInterface) {
    return this.http
      .post<{ data: UserInterface }>
      (`${this.baseUrl}`, data, {})
      .pipe(map(response => response.data));

  }

  update(id: number, data: UserInterface) {
    return this.http
      .put<{ data: UserInterface }>(`${this.baseUrl}/${id}`, data, {})
      .pipe(
        map(data => data)
      );
  }

  destroy(id: number): Observable<any> {
    return this.http
      .delete
      (`${this.baseUrl}/${id}`, {})
  }


}
