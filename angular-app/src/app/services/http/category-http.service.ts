import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {CategoryInterface} from "../../models"
import {map} from "rxjs/operators";
import {HttpResource} from "./http-resource";

@Injectable({
  providedIn: 'root'
})


export class CategoryHttpService implements HttpResource<CategoryInterface>{

  private baseUrl = `http://localhost:8000/api/categories`;

  constructor(private http: HttpClient) {

  }

  list(page: number): Observable<{
    data: Array<CategoryInterface>, meta: any
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
        data: Array<CategoryInterface>, meta: any
        // meta: Array<PaginateInterface>
      }>
      (`${this.baseUrl}`, {
        params,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  }

  get(id: number): Observable<CategoryInterface> {
    const token = window.localStorage.getItem('token');
    return this.http
      .get<{ data: CategoryInterface }>
      (`${this.baseUrl}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(map(response => response.data));
  }

  create(data: CategoryInterface) {
    const token = window.localStorage.getItem('token');
    return this.http
      .post<{ data: CategoryInterface }>
      (`${this.baseUrl}`, data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(map(response => response.data));

  }

  update(id: number, data: CategoryInterface) {
    const token = window.localStorage.getItem('token');
    return this.http
      .put<{ data: CategoryInterface }>(`${this.baseUrl}/${id}`, data, {
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
