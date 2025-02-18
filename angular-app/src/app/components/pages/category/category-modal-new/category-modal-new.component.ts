import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from 'src/app/components/bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryHttpService } from 'src/app/services/http/category-http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import fieldsOptions from '../category-form/category-fields-options'

@Component({
  selector: 'category-new-modal',
  templateUrl: './category-modal-new.component.html',
  styleUrls: ['./category-modal-new.component.css']
})
export class CategoryModalNewComponent implements OnInit {

  form: FormGroup;
  errors = {};

  @ViewChild(ModalComponent)  modal: ModalComponent;

  @Output() onSuccess:EventEmitter<any> = new EventEmitter<any>();
  @Output() onError:EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private categoryHttp: CategoryHttpService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(fieldsOptions.name.validationMessage.maxlength)]],
      active: true
    })
  }

  ngOnInit() {
  }

  submit() {
    this.categoryHttp
      .create(this.form.value)
      .subscribe(category => {
        this.form.reset({
          name: '',
          active: true
        });
        this.onSuccess.emit(category);
        this.modal.hide()
      }, responseError => {
        if (responseError.status === 422) {
          this.errors = responseError.error.errors
        }
        this.onError.emit(responseError)
      })
  }

  showModal() {
    this.modal.show()
  }

  showErrors(): boolean {
    return Object.keys(this.errors).length != 0;
  }

  hideModal($event: Event) {
    console.log($event)
  }

}
