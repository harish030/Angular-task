import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcartcomponentComponent } from './addcartcomponent/addcartcomponent.component';

const routes: Routes = [
  {
    path:'',component:AddcartcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddtocartRoutingModule { }
