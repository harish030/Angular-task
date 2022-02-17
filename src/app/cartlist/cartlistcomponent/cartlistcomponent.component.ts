import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupserviceService } from 'src/app/signupmodule/signupservice.service';

@Component({
  selector: 'app-cartlistcomponent',
  templateUrl: './cartlistcomponent.component.html',
  styleUrls: ['./cartlistcomponent.component.scss']
})
export class CartlistcomponentComponent implements OnInit {
  info:any;
  address={
    firstname:'',
      lastname:'',
      mobilenumber:null,
      email:'',
      address1:'',
      address2:'',
      landmark:'',
      pincode:null,
      state:'',
      district:''
  }
  cartlist:Array<any>=[];
  products:any;
  id:any;
  cartlength=0;
  constructor(private activate:ActivatedRoute,private router:Router,private http:HttpClient,public service:SignupserviceService) {
    
    // this.http.get('http://localhost:3000/mobilenumber/').subscribe((data1)=>{
      
    //   this.info=data1;
    //   console.log("get");
      
       
      
    // });
    this.service.getData().subscribe((data1)=>{
      this.info=data1;
    },error=>{
      console.log(error);
      
    })
    this.activate.queryParams.subscribe((params:any)=>{
      console.log("logs",params);
      this.id=params.data;
     
      
    });
    
      
     
    setTimeout(() => {
      for (let index = 0; index < this.info.length; index++) {
        const element = this.info[index];
       
       
       
        
        
        if (element.id == this.id) {
          console.log(element.id);
          console.log(this.id);
          this.address=element;
          
          
          
        }
        
        
      }
      
      
    }, 500);
   
    
    
  }
  totalamount=0;
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
          this.cartlength=this.cartlength + 1;
          this.cartlist.push(element);
          
          
        }
        
      }
      var gst=(18/100) * this.totalamount;
      this.totalamount=gst + this.totalamount;
      console.log(this.cartlist);
     }, 400);
  }
  checkOut(){
    this.router.navigateByUrl(`/payment?data=${this.id}`);
  }

}
