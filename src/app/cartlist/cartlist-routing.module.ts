import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartlistcomponentComponent } from './cartlistcomponent/cartlistcomponent.component';

const routes: Routes = [
  {
    path:'',component:CartlistcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartlistRoutingModule { }
