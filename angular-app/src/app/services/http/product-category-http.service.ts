import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ProductCategoryInterface} from "../../models";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryHttpService {

  private baseApi = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {
  }

  list(productId: number): Observable<ProductCategoryInterface> {
    const token = window.localStorage.getItem('token');
    return this.http
      .get<{ data: ProductCategoryInterface }>
      (this.getBaseUrl(productId), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(
        map(response => response.data)
      );
  }

  create(productId: number, categoriesId: number[]): Observable<ProductCategoryInterface> {
    const token = window.localStorage.getItem('token');
    return this.http
      .post<{ data: ProductCategoryInterface }>
      (this.getBaseUrl(productId), {categories: categoriesId}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(
        map(response => response.data)
      );
  }

  private getBaseUrl(productId: number, categoryId: number = null): string {
    let baseUrl = `${this.baseApi}/products/${productId}/categories`;
    if (categoryId) {
      baseUrl += `/${categoryId}`;
    }
    return baseUrl;
  }

}

