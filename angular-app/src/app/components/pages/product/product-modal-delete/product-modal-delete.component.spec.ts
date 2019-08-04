import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalDeleteComponent } from './product-modal-delete.component';

describe('ProductModalDeleteComponent', () => {
  let component: ProductModalDeleteComponent;
  let fixture: ComponentFixture<ProductModalDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductModalDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
