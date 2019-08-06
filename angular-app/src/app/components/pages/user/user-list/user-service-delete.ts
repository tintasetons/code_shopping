import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import PNotify from "pnotify/dist/es/PNotify";
import {UserListComponent} from "./user-list.component";

@Injectable({providedIn: 'root'})

export class UserServiceDelete {

  private _userListComponent: UserListComponent;

  constructor() {

  }

  set userListComponent(value: UserListComponent) {
    this._userListComponent = value;
  }

  showModalDelete(userId: number) {
    this._userListComponent.userId = userId;
    this._userListComponent.userDeleteModal.showModal();
  }


  onDeleteSuccess($event: any) {
    PNotify.success({
      title: 'Ok!',
      text: 'Usuario removida com sucesso!.'
    });
    this._userListComponent.getUsers();
  }

  onDeleteError($event: HttpErrorResponse) {
    PNotify.error({
      title: 'Ops! Algo deu errado!',
      text: 'Não foi possível excluir a usuario!.'
    });
    console.log($event);
  }
}
