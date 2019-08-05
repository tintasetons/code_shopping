import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {UserListComponent} from "./user-list.component";

@Injectable({
  providedIn: 'root'
})

export class UserServiceEdit {

  private _userListComponent: UserListComponent;
  constructor() {

  }

  set userListComponent(value:UserListComponent){
    this._userListComponent = value;
  }

  showModalEdit( userId: number) {
    this._userListComponent.userId = userId;
    this._userListComponent.userEditModal.showModal();
  }


  onEditSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Usuario atualizada com sucesso!.'
    });
    this._userListComponent.getUsers();
  }

  onEditError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'Não foi possível atulizar a usuario!.'
    });
    console.log($event);
  }

}
