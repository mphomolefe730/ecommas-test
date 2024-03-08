import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDesktopNavComponent } from './seller-desktop-nav.component';

describe('SellerDesktopNavComponent', () => {
  let component: SellerDesktopNavComponent;
  let fixture: ComponentFixture<SellerDesktopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerDesktopNavComponent]
    });
    fixture = TestBed.createComponent(SellerDesktopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
