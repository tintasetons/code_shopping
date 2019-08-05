import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModalNewComponent } from './user-modal-new.component';

describe('UserModalNewComponent', () => {
  let component: UserModalNewComponent;
  let fixture: ComponentFixture<UserModalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
