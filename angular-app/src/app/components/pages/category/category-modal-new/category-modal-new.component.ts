import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'category-new-modal',
  templateUrl: './category-modal-new.component.html',
  styleUrls: ['./category-modal-new.component.css']
})
export class CategoryModalNewComponent implements OnInit {
  //
  // category: CategoryInterface = {
  //   name: '',
  //   active: true
  // };
  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  private form: FormGroup;

  constructor(public categoryHttp: CategoryHttpService, formBuilder: FormBuilder) {
      this.form = formBuilder.group({
        name:'',
        active: true
      });
  }

  ngOnInit() {
  }

  submit() {
    // this.categoryHttp
    //   .create(this.category)
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
