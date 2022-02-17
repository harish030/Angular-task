import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentcomponentComponent } from './paymentcomponent/paymentcomponent.component';

const routes: Routes = [
  {
    path:'',component:PaymentcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
