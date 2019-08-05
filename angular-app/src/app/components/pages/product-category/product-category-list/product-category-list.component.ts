import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {ProductCategoryInterface, ProductInterface} from "../../../../models";
import {ProductCategoryHttpService} from "../../../../services/http/product-category-http.service";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";


@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  productId: number;
  product: ProductInterface = null;
  productCategory: ProductCategoryInterface = null;


  constructor(private route: ActivatedRoute,
              private productHttp: ProductHttpService,
              private productCategoryHttp: ProductCategoryHttpService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.product;
      this.getProduct();
      this.getproductCategory();
    });
  }

  getProduct() {
    this.productHttp
      .get(this.productId)
      .subscribe(product => this.product = product);

  }


  onInsertSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'A categoria foi adicionada com sucesso!'
    });
    this.getproductCategory();
  }

  getproductCategory() {
    this.productCategoryHttp
      .list(this.productId)
      .subscribe(productCategory => {
        this.productCategory = productCategory;
        console.log(this.productCategory);
      })
  }

  onInsertError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'A categoria não foi adicionada com sucesso!'
    });
    console.log($event);
  }


}
