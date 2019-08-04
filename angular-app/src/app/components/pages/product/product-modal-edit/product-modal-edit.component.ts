import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductInterface} from "../../../../models";
import {ProductHttpService} from "../../../../services/http/product-http.service";

@Component({
  selector: 'product-edit-modal',
  templateUrl: './product-modal-edit.component.html',
  styleUrls: ['./product-modal-edit.component.css']
})
export class ProductModalEditComponent implements OnInit {

  product: ProductInterface = {
    name: '',
    description: '',
    price: 0,
    active: true
  };

  _productId: number;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(public productHttp: ProductHttpService) {
  }

  ngOnInit() {
  }


  @Input()
  set productId(value) {
    this._productId = value;
    if (this._productId) {
      this.productHttp.get(this._productId)
        .subscribe(product => this.product = product)
    }
  }

  submit() {
    this.productHttp
      .update(this._productId, this.product)
      .subscribe((product) => {
        this.onSuccess.emit(product);
        this.modal.hide();
      }, error => this.onError.emit(error));



    // const token = window.localStorage.getItem('token');
    // this.http.put(`http://localhost:8000/api/products/${this._productId}`, this.product, {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // })
    //   .subscribe((product) => {
    //     this.onSuccess.emit(product);
    //     this.modal.hide();
    //   }, error => this.onError.emit(error));

  }


  public showModal() {
    this.modal.show();
  }

  public hideModal($event) {
    console.log($event);
  }

}
