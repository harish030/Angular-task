import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackcomponentComponent } from './feedbackcomponent/feedbackcomponent.component';

const routes: Routes = [
  {
    path:'',component:FeedbackcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
