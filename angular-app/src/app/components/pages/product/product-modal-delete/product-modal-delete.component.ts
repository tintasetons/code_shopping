import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ProductInterface} from "../../../../models";
import {ProductHttpService} from "../../../../services/http/product-http.service";

@Component({
  selector: 'product-delete-modal',
  templateUrl: './product-modal-delete.component.html',
  styleUrls: ['./product-modal-delete.component.css']
})
export class ProductModalDeleteComponent implements OnInit {

  product: ProductInterface  = null;

  _productId: number;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  @ViewChild(ModalComponent) modal: ModalComponent;


  constructor(private http: HttpClient, public productHttp: ProductHttpService) {
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

  destroy(){
    const token = window.localStorage.getItem('token');
    this.http.delete(`http://localhost:8000/api/products/${this._productId}`,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .subscribe((product) => {
        this.onSuccess.emit(product);
        this.modal.hide();
      }, error => this.onError.emit(error));

  }

  public showModal() {
    this.modal.show();
  }

  public hideModal($event) {
    console.log($event);
  }
}
