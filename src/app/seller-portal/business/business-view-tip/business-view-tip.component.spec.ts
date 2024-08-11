import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessViewTipComponent } from './business-view-tip.component';

describe('BusinessViewTipComponent', () => {
  let component: BusinessViewTipComponent;
  let fixture: ComponentFixture<BusinessViewTipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessViewTipComponent]
    });
    fixture = TestBed.createComponent(BusinessViewTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
