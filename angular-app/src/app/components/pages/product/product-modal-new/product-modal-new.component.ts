import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {ProductInterface} from "../../../../models";

@Component({
  selector: 'product-new-modal',
  templateUrl: './product-modal-new.component.html',
  styleUrls: ['./product-modal-new.component.css']
})
export class ProductModalNewComponent implements OnInit {

  product: ProductInterface = {
    name: '',
    active: true
  };
  @ViewChild(ModalComponent) modal: ModalComponent;


  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(public productHttp: ProductHttpService) {
  }

  ngOnInit() {
  }

  submit() {
    this.productHttp
      .create(this.product)
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
