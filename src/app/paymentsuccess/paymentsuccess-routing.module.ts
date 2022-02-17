import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsuccesscompComponent } from './paymentsuccesscomp/paymentsuccesscomp.component';

const routes: Routes = [
  {
    path:'',component:PaymentsuccesscompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsuccessRoutingModule { }
