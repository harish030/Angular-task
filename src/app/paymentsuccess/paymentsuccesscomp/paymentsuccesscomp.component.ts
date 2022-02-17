import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paymentsuccesscomp',
  templateUrl: './paymentsuccesscomp.component.html',
  styleUrls: ['./paymentsuccesscomp.component.scss']
})
export class PaymentsuccesscompComponent implements OnInit {
  id:any;
  constructor(private activate:ActivatedRoute,private router:Router) {
    this.activate.queryParams.subscribe((params:any)=>{
      console.log("logs",params);
      this.id=params.data;
     
      
    });
   }
   keepBrowsing(){
    this.router.navigateByUrl(`/?data=${this.id}`);
   }
  ngOnInit(): void {
  }

}
