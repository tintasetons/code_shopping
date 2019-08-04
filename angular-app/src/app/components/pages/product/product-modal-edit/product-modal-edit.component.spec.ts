import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalEditComponent } from './product-modal-edit.component';

describe('ProductModalEditComponent', () => {
  let component: ProductModalEditComponent;
  let fixture: ComponentFixture<ProductModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
