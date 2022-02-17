import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtocartRoutingModule } from './addtocart-routing.module';
import { AddcartcomponentComponent } from './addcartcomponent/addcartcomponent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddcartcomponentComponent
  ],
  imports: [
    CommonModule,
    AddtocartRoutingModule,
    FormsModule
  ]
})
export class AddtocartModule { }
