import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {CategoryInterface, ProductInterface} from "../../models"
import {map} from "rxjs/operators";
import {HttpResource, SearchParams, SearchParamsBuild} from "./http-resource";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})

export class ProductHttpService implements HttpResource<ProductInterface> {

  private baseUrl = `${environment.api.url}/api/products`;

  constructor(private http: HttpClient) {
  }

  list(searchParams: SearchParams): Observable<{
    data: Array<ProductInterface>, meta: any
  }> {

    const sParams = new SearchParamsBuild(searchParams).makeObject();
    const params = new HttpParams({
      fromObject: (<any>sParams)
    });
    return this.http
      .get<{
        data: Array<ProductInterface>, meta: any
      }>
      (`${this.baseUrl}`, {
        params
      });
  }

  get(id: number): Observable<ProductInterface> {
    return this.http
      .get<{ data: ProductInterface }>
      (`${this.baseUrl}/${id}`, {})
      .pipe(map(response => response.data));
  }

  create(data: ProductInterface) {
    return this.http
      .post<{ data: ProductInterface }>
      (`${this.baseUrl}`, data, {})
      .pipe(map(response => response.data));
  }

  update(id: number, data: ProductInterface) {
    return this.http
      .put<{ data: ProductInterface }>(`${this.baseUrl}/${id}`, data, {})
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
