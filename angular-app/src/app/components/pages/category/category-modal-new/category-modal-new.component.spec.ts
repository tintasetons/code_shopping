import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModalNewComponent } from './category-modal-new.component';

describe('CategoryModalNewComponent', () => {
  let component: CategoryModalNewComponent;
  let fixture: ComponentFixture<CategoryModalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryModalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
