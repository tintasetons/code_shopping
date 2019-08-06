import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UserInterface} from "../../../../models";
import {UserHttpService} from "../../../../services/http/user-http.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'user-delete-modal',
  templateUrl: './user-modal-delete.component.html',
  styleUrls: ['./user-modal-delete.component.css']
})
export class UserModalDeleteComponent implements OnInit {

  user: UserInterface  = null;

  _userId: number;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  @ViewChild(ModalComponent) modal: ModalComponent;


  constructor(private http: HttpClient, public userHttp: UserHttpService) {
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

  destroy(){

    this.http.delete(`${environment.api.url}/api/users/${this._userId}`,{

    })
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
