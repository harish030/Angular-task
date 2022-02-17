import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupserviceService } from '../signupservice.service';

@Component({
  selector: 'app-sigupcomponent',
  templateUrl: './sigupcomponent.component.html',
  styleUrls: ['./sigupcomponent.component.scss']
})
export class SigupcomponentComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,public service:SignupserviceService) {
    // this.http.get('http://localhost:3000/mobilenumber/').subscribe((data)=>{
    //   console.log(data);
    //   this.numbercheck=data;
      
        
    //   });
      this.service.getData().subscribe((data)=>{
        this.numbercheck=data;
      },error=>{
        console.log(error);
        
      })
   }
  mobilenumber={
    mobilenumber1:null
  }
  data:any;
  numbercheck:any;
  onContinue(){
    console.log("hai");
    this.service.mobilenumber=this.mobilenumber.mobilenumber1;
    console.log("mnb",this.numbercheck);
    for (let index = 0; index < this.numbercheck.length; index++) {
      const element = this.numbercheck[index];
      if (element.mobilenumber == this.mobilenumber.mobilenumber1) {
        this.data=element.id;
        console.log("mohamed harish");
        console.log(this.service.signup);
        
        
        this.service.signup=true;
        console.log(this.service.signup);
        this.router.navigateByUrl(`/otp?data=${this.data}`);
        break;
        
        
        
      } else {
        
        this.service.signup=false;
        
      }
    }
    // this.numbercheck.forEach((element:any) => {
    //   console.log(element.id);
    //   if (element.mobilenumber == this.mobilenumber.mobilenumber1) {
    //     this.data=element.id;
    //     console.log("mohamed harish");
    //     console.log(this.service.signup);
        
        
    //     this.service.signup=true;
    //     console.log(this.service.signup);
    //     this.router.navigateByUrl(`/otp?data=${this.data}`);
        
    //     console.log("innerid",this.data);
        
        
    //   } else {
        
    //     this.service.signup=false;
        
    //   }
    
     
      

      
    // })
    if (this.service.signup == false) {
      this.router.navigateByUrl('/otp');

    }
    // this.numbercheck.forEach((element1:any) => {
    //   if (element1.mobilenumber1 == this.mobilenumber.mobilenumber1) {
    //     this.data=element1.id;
    //     this.router.navigateByUrl(`/otp?data=${this.data}`);
    //     console.log("inneridlast",this.data);
        
       
    //   } else {
        
    //   }
    // });
    
    
    
    console.log("id",this.data);
    
    
  }
  
  ngOnInit(): void {
  }

}
