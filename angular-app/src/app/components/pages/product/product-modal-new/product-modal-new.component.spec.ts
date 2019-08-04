import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalNewComponent } from './product-modal-new.component';

describe('ProductModalNewComponent', () => {
  let component: ProductModalNewComponent;
  let fixture: ComponentFixture<ProductModalNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductModalNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModalNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
