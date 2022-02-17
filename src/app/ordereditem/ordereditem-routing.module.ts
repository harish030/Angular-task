import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdereditemcompComponent } from './ordereditemcomp/ordereditemcomp.component';

const routes: Routes = [
  {
    path:'',component:OrdereditemcompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdereditemRoutingModule { }
