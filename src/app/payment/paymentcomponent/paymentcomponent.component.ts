import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupserviceService } from 'src/app/signupmodule/signupservice.service';

@Component({
  selector: 'app-paymentcomponent',
  templateUrl: './paymentcomponent.component.html',
  styleUrls: ['./paymentcomponent.component.scss']
})
export class PaymentcomponentComponent implements OnInit {
  products1:any;
  carddetails={
    cardholdername:'',
    cardnumber:null,
    expirydate:'',
    cvv:null


  }
  itemdetails1:any;
  constructor(private http:HttpClient,public service:SignupserviceService,private activate:ActivatedRoute,private router:Router) { 
    this.service.getDataProducts().subscribe((data)=>{
      this.products1=data;
    });
    // this.service.getItemDetails().subscribe((data2)=>{
    //   this.itemdetails1=data2;
    // });
    
    this.activate.queryParams.subscribe((params:any)=>{
      console.log("logs",params);
      this.id=params.data;
     
      
    });
  }
  id:any;
  products:any;
  cartlist:Array<any>=[];
  totalamount=0;
  totalamountgst=0;
  gst=0;
  roundoff=0;
  itemdetails:any=
    {
      personid:null,
      genarateid:null,
      items:[

      ]

      
    }
  

  paymentFunction(){
    
    
    
     if((this.carddetails.cardholdername == "harish") && (this.carddetails.cardnumber == 123) && (this.carddetails.expirydate == "01/02") && (this.carddetails.cvv == 123)){
      this.itemdetails.personid=Number(this.id);
      this.itemdetails.genarateid=Math.floor(100000 + Math.random() * 900000);
      this.service.putItemDetails(this.itemdetails).subscribe(()=>{
  
      })
       setTimeout(() => {
        this.router.navigateByUrl(`/paymentsuccess?data=${this.id}`);
        for (let index = 0; index < this.products.length; index++) {
          const element = this.products[index];
          if(Number(element.idcart) == this.id){
            this.service.deleteDataProducts(element.id).subscribe(()=>{
 
            })
          }
         
        }
       }, 500);
   }
    
    
  }
  ngOnInit(): void {
    // this.http.get('http://localhost:3000/products/').subscribe((data2)=>{
    //   console.log("result");
      
    //   this.products=data2;
     
      
       
      
    //  });
     this.service.getDataProducts().subscribe((data1)=>{
      this.products=data1;
    },error=>{
      console.log(error);
      
    });
     setTimeout(() => {
      for (let index = 0; index < this.products.length; index++) {
        const element = this.products[index];
        
        if(Number(element.idcart) == this.id){
          this.totalamount=this.totalamount + element.amount;
          this.cartlist.push(element);
          this.itemdetails.items.push(element);
          
          
        }
        
      }
      this.gst=(18/100) * this.totalamount;
      this.gst=Math.round(this.gst);
      this.totalamountgst=this.gst + this.totalamount;
      console.log(this.totalamountgst);
      var withoutroundoff=this.totalamountgst;
      this.totalamountgst=Math.round(this.totalamountgst / 10) * 10;
      this.roundoff=withoutroundoff-this.totalamountgst;
      console.log(this.totalamountgst);
      
      
      console.log(this.cartlist);
     }, 400);
  }

}
