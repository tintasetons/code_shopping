import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductModalNewComponent} from "../product-modal-new/product-modal-new.component";
import {ProductModalEditComponent} from "../product-modal-edit/product-modal-edit.component";
import {ProductModalDeleteComponent} from "../product-modal-delete/product-modal-delete.component";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {ProductInterface} from "../../../../models";
import {ProductServiceInsert} from "./product-service-insert";
import {ProductServiceEdit} from "./product-service-edit";
import {ProductServiceDelete} from "./product-service-delete";


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../../login/login.component.css']
})



export class ProductListComponent implements OnInit {


  products: Array<ProductInterface> = [];

  paginacao = {
    page:1,
    totalItems: 0,
    per_page: 3,
  };

  @ViewChild(ProductModalNewComponent) productNewModal: ProductModalNewComponent;
  @ViewChild(ProductModalEditComponent) productEditModal: ProductModalEditComponent;
  @ViewChild(ProductModalDeleteComponent) productDeleteModal: ProductModalDeleteComponent;

  productId: number;

  constructor(public productHttp: ProductHttpService,
              protected productServiceInsert: ProductServiceInsert,
              protected productServiceEdit: ProductServiceEdit,
              protected productServiceDelete: ProductServiceDelete) {
    this.productServiceInsert.productListComponent = this;
    this.productServiceEdit.productListComponent = this;
    this.productServiceDelete.productListComponent = this;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productHttp.list(this.paginacao.page)
      .subscribe(response => {
        this.products = response.data;
        this.paginacao.totalItems = response.meta.total;
        this.paginacao.per_page = response.meta.per_page;
        this.paginacao.page = response.meta.current_page;
        });
  }

  pageChanged(page){
    this.paginacao.page = page;
    this.getProducts();
  }


}
