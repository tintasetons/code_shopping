import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryInterface} from "../../../../models";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'category-edit-modal',
  templateUrl: './category-modal-edit.component.html',
  styleUrls: ['./category-modal-edit.component.css']
})
export class CategoryModalEditComponent implements OnInit {

  category: CategoryInterface = {
    name: '',
    active: true
  };

  _categoryId: number;

  form: FormGroup;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(public categoryHttp: CategoryHttpService, formBuilder: FormBuilder) {
    this.form = formBuilder.group(this.categoryHttp.clearForm);
  }

  ngOnInit() {
  }

  @Input()
  set categoryId(value) {
    this._categoryId = value;
    if (this._categoryId) {
      this.categoryHttp
        .get(this._categoryId)
        .subscribe(
          category => this.form.patchValue(category),
          responseError => {
            if (responseError.status == 401) {
              this.modal.hide();
            }
          }
        )
    }
  }

  submit() {
    this.categoryHttp
      .update(this._categoryId, this.form.value)
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
