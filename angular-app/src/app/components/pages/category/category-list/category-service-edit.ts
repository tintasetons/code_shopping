import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {CategoryListComponent} from "./category-list.component";

@Injectable({
  providedIn: 'root'
})

export class CategoryServiceEdit {

  private _categoryListComponent: CategoryListComponent;
  constructor() {

  }

  set categoryListComponent(value:CategoryListComponent){
    this._categoryListComponent = value;
  }

  showModalEdit( categoryId: number) {
    this._categoryListComponent.categoryId = categoryId;
    this._categoryListComponent.categoryEditModal.showModal();
  }


  onEditSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Categoria atualizada com sucesso!.'
    });
    this._categoryListComponent.getCategories();
  }

  onEditError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'Não foi possível atulizar a categoria!.'
    });
    console.log($event);
  }

}
