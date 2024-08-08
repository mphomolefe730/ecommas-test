import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTipsComponent } from './business-tips.component';

describe('BusinessTipsComponent', () => {
  let component: BusinessTipsComponent;
  let fixture: ComponentFixture<BusinessTipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessTipsComponent]
    });
    fixture = TestBed.createComponent(BusinessTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
