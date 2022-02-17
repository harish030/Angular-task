import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicedetailsRoutingModule } from './servicedetails-routing.module';
import { ServicedetailscompComponent } from './servicedetailscomp/servicedetailscomp.component';


@NgModule({
  declarations: [
    ServicedetailscompComponent
  ],
  imports: [
    CommonModule,
    ServicedetailsRoutingModule
  ]
})
export class ServicedetailsModule { }
