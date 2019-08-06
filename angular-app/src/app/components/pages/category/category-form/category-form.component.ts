import {Component, Input, OnInit} from '@angular/core';
import {CategoryInterface} from "../../../../models";

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input()
  category: CategoryInterface = {
    name: '',
    active: true
  };

  constructor() { }

  ngOnInit() {
  }

}
