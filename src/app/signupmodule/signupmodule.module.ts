import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupmoduleRoutingModule } from './signupmodule-routing.module';
import { SigupcomponentComponent } from './sigupcomponent/sigupcomponent.component';
import { FormsModule } from '@angular/forms';
import { OnlynumberDirective } from './onlynumber.directive';
import { OtpcomponentComponent } from './otpcomponent/otpcomponent.component';
import { PersoninformationComponent } from './personinformation/personinformation.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    SigupcomponentComponent,
    OnlynumberDirective,
    OtpcomponentComponent,
    PersoninformationComponent
  ],
  imports: [
    CommonModule,
    SignupmoduleRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SignupmoduleModule { }
