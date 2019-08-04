import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModalDeleteComponent } from './category-modal-delete.component';

describe('CategoryModalDeleteComponent', () => {
  let component: CategoryModalDeleteComponent;
  let fixture: ComponentFixture<CategoryModalDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryModalDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
