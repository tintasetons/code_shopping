import {Component, OnInit, ViewChild} from '@angular/core';
import {UserModalNewComponent} from "../user-modal-new/user-modal-new.component";
import {UserModalEditComponent} from "../user-modal-edit/user-modal-edit.component";
import {UserModalDeleteComponent} from "../user-modal-delete/user-modal-delete.component";
import {UserHttpService} from "../../../../services/http/user-http.service";
import {UserInterface} from "../../../../models";
import {UserServiceInsert} from "./user-service-insert";
import {UserServiceEdit} from "./user-service-edit";
import {UserServiceDelete} from "./user-service-delete";


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['../../login/login.component.css']
})



export class UserListComponent implements OnInit {


  users: Array<UserInterface> = [];

  paginacao = {
    page:1,
    totalItems: 0,
    per_page: 3,
  };

  @ViewChild(UserModalNewComponent) userNewModal: UserModalNewComponent;
  @ViewChild(UserModalEditComponent) userEditModal: UserModalEditComponent;
  @ViewChild(UserModalDeleteComponent) userDeleteModal: UserModalDeleteComponent;

  userId: number;

  constructor(public userHttp: UserHttpService,
              protected userServiceInsert: UserServiceInsert,
              protected userServiceEdit: UserServiceEdit,
              protected userServiceDelete: UserServiceDelete) {
    this.userServiceInsert.userListComponent = this;
    this.userServiceEdit.userListComponent = this;
    this.userServiceDelete.userListComponent = this;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userHttp.list({page: this.paginacao.page})
      .subscribe(response => {
        this.users = response.data;
        this.paginacao.totalItems = response.meta.total;
        this.paginacao.per_page = response.meta.per_page;
        this.paginacao.page = response.meta.current_page;
        });
  }

  pageChanged(page){
    this.paginacao.page = page;
    this.getUsers();
  }


}
