import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsuccesscompComponent } from './paymentsuccesscomp.component';

describe('PaymentsuccesscompComponent', () => {
  let component: PaymentsuccesscompComponent;
  let fixture: ComponentFixture<PaymentsuccesscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsuccesscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsuccesscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
