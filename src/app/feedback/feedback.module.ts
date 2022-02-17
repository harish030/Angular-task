import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackcomponentComponent } from './feedbackcomponent/feedbackcomponent.component';


@NgModule({
  declarations: [
    FeedbackcomponentComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
