import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryInterface} from "../../../../models";

@Component({
  selector: 'category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent implements OnInit {

  category: CategoryInterface = {
    name: '',
    active: true
  };

  _categoryId: number;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }


  @Input()
  set categoryId(value) {
    this._categoryId = value;
    if (this._categoryId) {
      const token = window.localStorage.getItem('token');
      this.http.get<{ data: any }>(`http://localhost:8000/api/categories/${value}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .subscribe((response) => this.category = response.data)
    }
  }

  submit() {
    const token = window.localStorage.getItem('token');
    this.http.put(`http://localhost:8000/api/categories/${this._categoryId}`, this.category, {
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
