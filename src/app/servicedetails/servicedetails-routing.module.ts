import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicedetailscompComponent } from './servicedetailscomp/servicedetailscomp.component';

const routes: Routes = [
  {
    path:'',component:ServicedetailscompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicedetailsRoutingModule { }
