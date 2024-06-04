import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFinalizeOrderComponent } from './cart-finalize-order.component';

describe('CartFinalizeOrderComponent', () => {
  let component: CartFinalizeOrderComponent;
  let fixture: ComponentFixture<CartFinalizeOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartFinalizeOrderComponent]
    });
    fixture = TestBed.createComponent(CartFinalizeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
