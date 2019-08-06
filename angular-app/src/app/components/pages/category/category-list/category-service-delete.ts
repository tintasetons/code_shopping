import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {CategoryListComponent} from "./category-list.component";

@Injectable({providedIn: 'root'})

export class CategoryServiceDelete {

  private _categoryListComponent: CategoryListComponent;

  constructor() {

  }

  set categoryListComponent(value: CategoryListComponent) {
    this._categoryListComponent = value;
  }

  showModalDelete(categoryId: number) {
    this._categoryListComponent.categoryId = categoryId;
    this._categoryListComponent.categoryDeleteModal.showModal();
  }


  onDeleteSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Categoria removida com sucesso!.'
    });
    this._categoryListComponent.getCategories();
  }

  onDeleteError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'Não foi possível excluir a categoria!.'
    });
    console.log($event);
  }
}
