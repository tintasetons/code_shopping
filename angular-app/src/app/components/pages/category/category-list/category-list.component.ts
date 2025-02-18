import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryModalNewComponent} from "../category-modal-new/category-modal-new.component";
import {CategoryModalEditComponent} from "../category-modal-edit/category-modal-edit.component";
import {CategoryModalDeleteComponent} from "../category-modal-delete/category-modal-delete.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {CategoryInterface} from "../../../../models";
import {CategoryServiceInsert} from "./category-service-insert";
import {CategoryServiceEdit} from "./category-service-edit";
import {CategoryServiceDelete} from "./category-service-delete";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {tap} from "rxjs/operators";



@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['../../login/login.component.css']
})



export class CategoryListComponent implements OnInit {

  categories: Array<CategoryInterface> = [];

  paginacao = {
    page: 1,
    totalItems: 0,
    per_page: 3,
  };

  sortColumn = {column: 'created_at', sort: 'asc'};

  @ViewChild(CategoryModalNewComponent) categoryNewModal: CategoryModalNewComponent;
  @ViewChild(CategoryModalEditComponent) categoryEditModal: CategoryModalEditComponent;
  @ViewChild(CategoryModalDeleteComponent) categoryDeleteModal: CategoryModalDeleteComponent;

  categoryId: number;
  searchText: string;

  constructor(public categoryHttp: CategoryHttpService,
              protected categoryServiceInsert: CategoryServiceInsert,
              protected categoryServiceEdit: CategoryServiceEdit,
              protected categoryServiceDelete: CategoryServiceDelete) {
    this.categoryServiceInsert.categoryListComponent = this;
    this.categoryServiceEdit.categoryListComponent = this;
    this.categoryServiceDelete.categoryListComponent = this;
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryHttp.list({
      page: this.paginacao.page,
      sort: this.sortColumn.column === '' ? null : this.sortColumn,
      search: this.searchText
    })
      .subscribe(response => {
        this.categories = response.data;
        this.paginacao.totalItems = response.meta.total;
        this.paginacao.per_page = response.meta.per_page;
        this.paginacao.page = response.meta.current_page;
      });
  }

  pageChanged(page) {
    this.paginacao.page = page;
    this.getCategories();
  }


  sort(sortColumn) {
    this.getCategories();
  }

  search(search) {
    this.searchText = search;
    this.getCategories();
  }

}
