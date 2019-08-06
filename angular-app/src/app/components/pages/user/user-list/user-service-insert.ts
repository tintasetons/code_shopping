import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {UserListComponent} from "./user-list.component";

@Injectable({providedIn: 'root'})

export class UserServiceInsert {

  private _userListComponent: UserListComponent;
  constructor() {

  }

  set userListComponent(value:UserListComponent){
    this._userListComponent = value;
  }

  showModalInsert() {
    this._userListComponent.userNewModal.showModal();
  }

  onInsertSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Usuario cadastrada com sucesso!.'
    });

    this._userListComponent.getUsers();
  }

  onInsertError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'A usuario não foi cadastrada!.'
    });
    console.log($event);
  }

}
