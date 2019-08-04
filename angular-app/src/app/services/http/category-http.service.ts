import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {CategoryInterface} from "../../models"


@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<{data:Array<CategoryInterface>}> {
    const token = window.localStorage.getItem('token');
    return this.http
      .get<{ data:Array<CategoryInterface>}>
      ('http://localhost:8000/api/categories', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  }

  create() {

  }

  update() {

  }

  destroy() {

  }


}
