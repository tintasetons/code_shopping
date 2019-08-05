import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {UserHttpService} from "../../../../services/http/user-http.service";
import {UserInterface} from "../../../../models";

@Component({
  selector: 'user-new-modal',
  templateUrl: './user-modal-new.component.html',
  styleUrls: ['./user-modal-new.component.css']
})
export class UserModalNewComponent implements OnInit {

  user: UserInterface = {
    name: '',
    email: ''
  };
  @ViewChild(ModalComponent) modal: ModalComponent;


  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(public userHttp: UserHttpService) {
  }

  ngOnInit() {
  }

  submit() {
    this.userHttp
      .create(this.user)
      .subscribe((user) => {
        this.onSuccess.emit(user);
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
