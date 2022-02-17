import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpcomponentComponent } from './otpcomponent/otpcomponent.component';
import { PersoninformationComponent } from './personinformation/personinformation.component';
import { SigupcomponentComponent } from './sigupcomponent/sigupcomponent.component';

const routes: Routes = [
  {
    path:'signup',component:SigupcomponentComponent,
  },{
    path:'otp',component:OtpcomponentComponent
  },{
    path:'personinfo',component:PersoninformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupmoduleRoutingModule { }
