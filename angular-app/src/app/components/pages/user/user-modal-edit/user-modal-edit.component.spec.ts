import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalEditComponent } from './user-modal-edit.component';

describe('UserModalEditComponent', () => {
  let component: UserModalEditComponent;
  let fixture: ComponentFixture<UserModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
