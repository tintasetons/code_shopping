import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {UserInterface} from "../../../../models";
import {UserHttpService} from "../../../../services/http/user-http.service";

@Component({
  selector: 'user-edit-modal',
  templateUrl: './user-modal-edit.component.html',
  styleUrls: ['./user-modal-edit.component.css']
})
export class UserModalEditComponent implements OnInit {

  user: UserInterface = {
    name: '',
    email: ''
  };

  _userId: number;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(public userHttp: UserHttpService) {
  }

  ngOnInit() {
  }


  @Input()
  set userId(value) {
    this._userId = value;
    if (this._userId) {
      this.userHttp.get(this._userId)
        .subscribe(user => this.user = user)
    }
  }

  submit() {
    this.userHttp
      .update(this._userId, this.user)
      .subscribe((user) => {
        this.onSuccess.emit(user);
        this.modal.hide();
      }, error => this.onError.emit(error));



    // const token = window.localStorage.getItem('token');
    // this.http.put(`http://localhost:8000/api/users/${this._userId}`, this.user, {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // })
    //   .subscribe((user) => {
    //     this.onSuccess.emit(user);
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
