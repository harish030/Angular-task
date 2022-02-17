import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupserviceService } from '../signupmodule/signupservice.service';

@Component({
  selector: 'app-landingpagecontent',
  templateUrl: './landingpagecontent.component.html',
  styleUrls: ['./landingpagecontent.component.scss']
})
export class LandingpagecontentComponent implements OnInit {
  data:any;
  id:any;
  pincodeservice={
    pincode:null,
    service:''
  }
  bgop="bg-opacity";
  deviceserviceshow=false;
  pincodetoastshow=false;
  constructor(private router:Router,public service:SignupserviceService,private activate:ActivatedRoute,public http:HttpClient) {
    // this.http.get('http://localhost:3000/mobilenumber/').subscribe((data1)=>{
      
    //   this.data=data1;
       
      
    // });
    this.service.getData().subscribe((data1)=>{
      this.data=data1;
    },error=>{
      console.log(error);
      
    });
    this.activate.queryParams.subscribe((params:any)=>{
      console.log("logs",params);
      this.id=params.data;
     
      
    });
    
   
   }
  deviceClick(dat:any){
    if(dat == 1){
      this.service.devicename="Refrigrator";
      this.router.navigateByUrl(`/cart?data=${this.id}`);
    }
    else if (dat == 2) {
      this.service.devicename="TV";
      this.router.navigateByUrl(`/cart?data=${this.id}`);
    }
    else if (dat == 3) {
      this.service.devicename="Air Conditioner";
      this.router.navigateByUrl(`/cart?data=${this.id}`);
    }
    else if(dat == 4){
      this.service.devicename="Phone";
      this.router.navigateByUrl(`/cart?data=${this.id}`);
    }
    
    
  }
  pincodeToast(){
    if ((this.pincodeservice.pincode == 614210) && (this.pincodeservice.service == "Repair")) {
      this.pincodetoastshow=true;
    }
    
  }
  toastClose(){
    this.pincodetoastshow=false;
    this.pincodeservice.pincode=null;
    this.pincodeservice.service='';
  }
  serviceClick(){
    this.deviceserviceshow=true;
  }
  devicerepairclose(){
    this.deviceserviceshow=false;
  }
  ngOnInit(): void {
  }
  

}
