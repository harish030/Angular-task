import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartlistRoutingModule } from './cartlist-routing.module';
import { CartlistcomponentComponent } from './cartlistcomponent/cartlistcomponent.component';


@NgModule({
  declarations: [
    CartlistcomponentComponent
  ],
  imports: [
    CommonModule,
    CartlistRoutingModule
  ]
})
export class CartlistModule { }
