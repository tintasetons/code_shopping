import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {CategoryInterface} from "../../../../models";
import {CategoryServiceInsert} from "./category-service-insert";
import {CategoryServiceEdit} from "./category-service-edit";
import {CategoryServiceDelete} from "./category-service-delete";


@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['../../login/login.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Array<CategoryInterface> = [];

  @ViewChild(CategoryNewModalComponent) categoryNewModal: CategoryNewModalComponent;
  @ViewChild(CategoryEditModalComponent) categoryEditModal: CategoryEditModalComponent;
  @ViewChild(CategoryDeleteModalComponent) categoryDeleteModal: CategoryDeleteModalComponent;

  categoryId: number;

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
    this.categoryHttp.list()
      .subscribe(response => {
        this.categories = response.data
      });
  }


}
