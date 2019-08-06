import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {ProductListComponent} from "./product-list.component";

@Injectable({providedIn: 'root'})

export class ProductServiceEdit {

  private _productListComponent: ProductListComponent;
  constructor() {

  }

  set productListComponent(value:ProductListComponent){
    this._productListComponent = value;
  }

  showModalEdit( productId: number) {
    this._productListComponent.productId = productId;
    this._productListComponent.productEditModal.showModal();
  }


  onEditSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Produto atualizada com sucesso!.'
    });
    this._productListComponent.getProducts();
  }

  onEditError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'Não foi possível atulizar a produto!.'
    });
    console.log($event);
  }

}
