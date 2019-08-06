import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {CategoryListComponent} from "./category-list.component";

@Injectable({providedIn: 'root'})

export class CategoryServiceInsert {

  private _categoryListComponent: CategoryListComponent;
  constructor() {

  }

  set categoryListComponent(value:CategoryListComponent){
    this._categoryListComponent = value;
  }

  showModalInsert() {
    this._categoryListComponent.categoryNewModal.showModal();
  }

  onInsertSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Categoria cadastrada com sucesso!.'
    });

    this._categoryListComponent.getCategories();
  }

  onInsertError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'A categoria não foi cadastrada!.'
    });
    console.log($event);
  }

}
