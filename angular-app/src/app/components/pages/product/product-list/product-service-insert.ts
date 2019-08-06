import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {ProductListComponent} from "./product-list.component";

@Injectable({providedIn: 'root'})

export class ProductServiceInsert {

  private _productListComponent: ProductListComponent;
  constructor() {

  }

  set productListComponent(value:ProductListComponent){
    this._productListComponent = value;
  }

  showModalInsert() {
    this._productListComponent.productNewModal.showModal();
  }

  onInsertSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Produto cadastrada com sucesso!.'
    });

    this._productListComponent.getProducts();
  }

  onInsertError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'A produto não foi cadastrada!.'
    });
    console.log($event);
  }

}
