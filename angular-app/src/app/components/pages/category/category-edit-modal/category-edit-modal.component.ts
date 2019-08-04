import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryInterface} from "../../../../models";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
  selector: 'category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent implements OnInit {

  category: CategoryInterface = {
    name: '',
    active: true
  };

  _categoryId: number;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(public categoryHttp: CategoryHttpService) {
  }

  ngOnInit() {
  }


  @Input()
  set categoryId(value) {
    this._categoryId = value;
    if (this._categoryId) {
      this.categoryHttp.get(this._categoryId)
        .subscribe(category => this.category = category)
    }
  }

  submit() {
    this.categoryHttp
      .update(this._categoryId, this.category)
      .subscribe((category) => {
        this.onSuccess.emit(category);
        this.modal.hide();
      }, error => this.onError.emit(error));



    // const token = window.localStorage.getItem('token');
    // this.http.put(`http://localhost:8000/api/categories/${this._categoryId}`, this.category, {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // })
    //   .subscribe((category) => {
    //     this.onSuccess.emit(category);
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
