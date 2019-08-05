import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalDeleteComponent } from './user-modal-delete.component';

describe('UserModalDeleteComponent', () => {
  let component: UserModalDeleteComponent;
  let fixture: ComponentFixture<UserModalDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
