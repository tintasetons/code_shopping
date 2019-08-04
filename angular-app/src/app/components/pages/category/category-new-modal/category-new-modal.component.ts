import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {CategoryInterface} from "../../../../models";

@Component({
  selector: 'category-new-modal',
  templateUrl: './category-new-modal.component.html',
  styleUrls: ['./category-new-modal.component.css']
})
export class CategoryNewModalComponent implements OnInit {

  category: CategoryInterface = {
    name: '',
    active:true
  };
  @ViewChild(ModalComponent) modal: ModalComponent;


  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();


  constructor(private http: HttpClient, public categoryHttp: CategoryHttpService) {


  }

  ngOnInit() {


  }

  submit() {
    const token = window.localStorage.getItem('token');
    this.http.post('http://localhost:8000/api/categories', this.category, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
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
