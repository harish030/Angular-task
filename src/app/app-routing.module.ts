import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcartcomponentComponent } from './addtocart/addcartcomponent/addcartcomponent.component';
import { LandingpagecontentComponent } from './landingpagecontent/landingpagecontent.component';
import { TvslandingpageComponent } from './tvslandingpage/tvslandingpage.component';

const routes: Routes = [
  {
    path:'',
    component:TvslandingpageComponent,
    children:[
      {
        path:'',component:LandingpagecontentComponent
      },
      {
        path:'cart',loadChildren: () => import('./addtocart/addtocart.module').then(m => m.AddtocartModule)
      },
      {
        path:'cartlist',loadChildren: () => import('./cartlist/cartlist.module').then(m => m.CartlistModule)
      },
      {
        path:'payment',loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path:'paymentsuccess',loadChildren: () => import('./paymentsuccess/paymentsuccess.module').then(m => m.PaymentsuccessModule)
      },{
        path:'feedback',loadChildren:() => import('./feedback/feedback.module').then(m => m.FeedbackModule)
      },
      {
        path:'ordereditem',loadChildren:() => import('./ordereditem/ordereditem.module').then(m => m.OrdereditemModule)
      },
      {
        path:'servicedetails',loadChildren:() => import('./servicedetails/servicedetails.module').then(m => m.ServicedetailsModule)
      }
    ]
    
  },
  {
    path:'',
    
      loadChildren: () => import('./signupmodule/signupmodule.module').then(m => m.SignupmoduleModule)
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
