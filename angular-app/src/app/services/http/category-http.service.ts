import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {CategoryInterface} from "../../models"
import {map} from "rxjs/operators";
import {HttpResource, SearchParams, SearchParamsBuild} from "./http-resource";
import {AuthService} from "../auth.service";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})

export class CategoryHttpService implements HttpResource<CategoryInterface> {

  private baseUrl = `${environment.api.url}/api/categories`;

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  list(searchParams: SearchParams): Observable<{
    data: Array<CategoryInterface>, meta: any
  }> {
    const sParams = new SearchParamsBuild(searchParams).makeObject();
    const params = new HttpParams({
      fromObject: (<any>sParams)
    });
    return this.http
      .get<{
        data: Array<CategoryInterface>, meta: any
      }>
      (`${this.baseUrl}`, {params});
  }

  get(id: number): Observable<CategoryInterface> {
    const token = this.authService.getToken();
    return this.http
      .get<{ data: CategoryInterface }>
      (`${this.baseUrl}/${id}`, {})
      .pipe(map(response => response.data));
  }

  create(data: CategoryInterface) {
    const token = this.authService.getToken();
    return this.http
      .post<{ data: CategoryInterface }>
      (`${this.baseUrl}`, data, {})
      .pipe(map(response => response.data));
  }

  update(id: number, data: CategoryInterface) {
    const token = this.authService.getToken();
    return this.http
      .put<{ data: CategoryInterface }>(`${this.baseUrl}/${id}`, data, {})
      .pipe(
        map(data => data)
      );
  }

  destroy(id: number): Observable<any> {
    const token = this.authService.getToken();
    return this.http
      .delete
      (`${this.baseUrl}/${id}`, {})
  }


}
