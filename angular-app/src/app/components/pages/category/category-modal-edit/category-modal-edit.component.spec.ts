import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModalEditComponent } from './category-modal-edit.component';

describe('CategoryModalEditComponent', () => {
  let component: CategoryModalEditComponent;
  let fixture: ComponentFixture<CategoryModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
