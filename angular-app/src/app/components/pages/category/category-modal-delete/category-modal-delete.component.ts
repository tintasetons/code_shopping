import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryInterface} from "../../../../models";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'category-delete-modal',
  templateUrl: './category-modal-delete.component.html',
  styleUrls: ['./category-modal-delete.component.css']
})
export class CategoryModalDeleteComponent implements OnInit {

  category: CategoryInterface  = null;

  _categoryId: number;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  @ViewChild(ModalComponent) modal: ModalComponent;


  constructor(private http: HttpClient, public categoryHttp: CategoryHttpService) {
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

  destroy(){

    this.http.delete(`${environment.api.url}/api/categories/${this._categoryId}`,{

    })
      .subscribe((category) => {
        this.onSuccess.emit(category);
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
