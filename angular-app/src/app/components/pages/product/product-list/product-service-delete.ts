import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {ProductListComponent} from "./product-list.component";

@Injectable({
  providedIn: 'root'
})

export class ProductServiceDelete {

  private _productListComponent: ProductListComponent;

  constructor() {

  }

  set productListComponent(value: ProductListComponent) {
    this._productListComponent = value;
  }

  showModalDelete(productId: number) {
    this._productListComponent.productId = productId;
    this._productListComponent.productDeleteModal.showModal();
  }


  onDeleteSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Produto removida com sucesso!.'
    });
    this._productListComponent.getProducts();
  }

  onDeleteError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'Não foi possível excluir a produto!.'
    });
    console.log($event);
  }
}
