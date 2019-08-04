import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {ProductInterface} from "../../models"
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class ProductHttpService {

  private baseUrl = `http://localhost:8000/api/products`;

  constructor(private http: HttpClient) {

  }

  list(page: number): Observable<{
    data: Array<ProductInterface>, meta: any
    // meta: Array<PaginateInterface>
  }> {
    const token = window.localStorage.getItem('token');
    const params = new HttpParams({
      fromObject: {
        page: page + ""
      }
    });
    return this.http
      .get<{
        data: Array<ProductInterface>, meta: any
        // meta: Array<PaginateInterface>
      }>
      (`${this.baseUrl}`, {
        params,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  }

  get(id: number): Observable<ProductInterface> {
    const token = window.localStorage.getItem('token');
    return this.http
      .get<{ data: ProductInterface }>
      (`${this.baseUrl}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(map(response => response.data));
  }

  create(data: ProductInterface) {
    const token = window.localStorage.getItem('token');
    return this.http
      .post<{ data: ProductInterface }>
      (`${this.baseUrl}`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(map(response => response.data));

  }

  update(id: number, data: ProductInterface) {
    const token = window.localStorage.getItem('token');
    return this.http
      .put<{ data: ProductInterface }>(`${this.baseUrl}/${id}`, data, {
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
