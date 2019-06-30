import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['../../login/login.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const token = window.localStorage.getItem('token');
    this.http.get<{ data: Array<any> }>('http://localhost:8000/api/categories', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .subscribe(response => this.categories = response.data);
  }

}
