import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CategoryInterface, ProductCategoryInterface} from "../../models";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryHttpService {

  constructor(private http: HttpClient) {
  }

  list(productId: number): Observable<ProductCategoryInterface> {
    const token = window.localStorage.getItem('token');
    return this.http
      .get<{ data: ProductCategoryInterface }>
      (`http://localhost:8000/api/products/${productId}/categories`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .pipe(
        map(response => response.data)
      );
  }
}


