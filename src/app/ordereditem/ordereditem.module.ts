import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdereditemRoutingModule } from './ordereditem-routing.module';
import { OrdereditemcompComponent } from './ordereditemcomp/ordereditemcomp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrdereditemcompComponent
  ],
  imports: [
    CommonModule,
    OrdereditemRoutingModule,
    FormsModule
  ]
})
export class OrdereditemModule { }
