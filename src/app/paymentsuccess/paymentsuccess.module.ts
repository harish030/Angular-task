import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsuccessRoutingModule } from './paymentsuccess-routing.module';
import { PaymentsuccesscompComponent } from './paymentsuccesscomp/paymentsuccesscomp.component';


@NgModule({
  declarations: [
    PaymentsuccesscompComponent
  ],
  imports: [
    CommonModule,
    PaymentsuccessRoutingModule
  ]
})
export class PaymentsuccessModule { }
