import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupserviceService } from '../signupservice.service';

@Component({
  selector: 'app-otpcomponent',
  templateUrl: './otpcomponent.component.html',
  styleUrls: ['./otpcomponent.component.scss']
})
export class OtpcomponentComponent implements OnInit {
  id1:any;
  data1:any;
  constructor(private router:Router,private service:SignupserviceService,public activate:ActivatedRoute,private http:HttpClient) {
    // this.http.get('http://localhost:3000/mobilenumber/').subscribe((data)=>{
      
     
    
      
    // });
    this.activate.queryParams.subscribe((params:any)=>{
      console.log("logs1",params.data);
      this.id1=params.data;
      console.log("heeeeee",this.id1);
      this.ser=this.service.signup;
      
    })
   }
  otp: any;
  ser:any;
  mobilenumber={
    mobilenumber1:null
  }
  goPersonInfo(){
    if(this.otp == 1234){
      
      if (this.ser == true) {
        this.router.navigateByUrl(`/?data=${this.id1}`);
      } 
      else {
        this.mobilenumber.mobilenumber1=this.service.mobilenumber;
        this.router.navigateByUrl('/personinfo');
      
      
      }
      // this.router.navigateByUrl('/personinfo');
    }
    // this.http.get('http://localhost:3000/mobilenumber/').subscribe((data)=>{
    //     this.data1=data;
    //     console.log("final",data);
    //     for (let index = 0; index < this.data1.length; index++) {
    //       const element = this.data1[index];
    //       if(element.mobilenumber1 == this.service.mobilenumber){
    //         this.id1=element.id;
    //       }
    //     }
    //     this.router.navigateByUrl(`/personinfo?data=${this.id1}`);
    
      
    // });
  }
  ngOnInit(): void {
  }

}
