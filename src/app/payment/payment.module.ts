import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentcomponentComponent } from './paymentcomponent/paymentcomponent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentcomponentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule
  ]
})
export class PaymentModule { }
