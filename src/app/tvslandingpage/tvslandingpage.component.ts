import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupserviceService } from '../signupmodule/signupservice.service';

@Component({
  selector: 'app-tvslandingpage',
  templateUrl: './tvslandingpage.component.html',
  styleUrls: ['./tvslandingpage.component.scss']
})
export class TvslandingpageComponent implements OnInit {
  profile:any;
  id:any;
  logoutshow="";
  name:any;
  products:any;
  cartlength=0;
  cartlengthshow=false;
  constructor(private http:HttpClient,public service:SignupserviceService,public activate:ActivatedRoute,private router:Router) {
    this.service.login=false;
    // this.http.get('http://localhost:3000/mobilenumber/').subscribe((data)=>{
    //   console.log(data);
    //   this.profile=data;
      
        
    //   });
      this.service.getData().subscribe((data)=>{
        this.profile=data;
      },error=>{
        console.log(error);
        
      });
      this.service.getDataProducts().subscribe((data)=>{
        this.products=data;
      },error=>{
        console.log(error);
        
      });
      
      setTimeout(() => {
        this.activate.queryParams.subscribe((params:any)=>{
          console.log("logs",params);
          this.id=params.data;
          for (let index = 0; index < this.products.length; index++) {
            const element = this.products[index];
            if(Number(element.idcart) == this.id){
              this.cartlengthshow=true;
              this.cartlength=this.cartlength + 1;
            }
            
          }
         
          
        });
        for (let index = 0; index < this.profile.length; index++) {
          const element = this.profile[index];
          if (element.id == this.id) {
            this.showlogin=false;
            this.showprofile=true;
            this.service.login=true;
          }
        }
        for (let index = 0; index < this.profile.length; index++) {
          const element = this.profile[index];
          if (element.id == this.id) {
            this.name=element.firstname;
          }
        }
      },500);
    console.log("Mumbai indians");
    
  }
  // logout(){
  //   this.logoutshow="d-block mt-0";
  // }
  showprofile=false;
  showlogin=true;
  logOut(){
    this.router.navigateByUrl('/');
    this.showlogin=true;
    this.cartlengthshow=false;
    this.showprofile=false;
  }
  logincheck1:any=false;
  goCart(){
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      if(Number(element.idcart) == this.id){
        this.logincheck1=true;
        this.router.navigateByUrl(`/cartlist?data=${this.id}`);
      }
      
    }
    if(this.logincheck1 == false){
      this.router.navigateByUrl('/signup');
    }
  }
  profileService(){
    this.router.navigateByUrl(`/ordereditem?data=${this.id}`);
  }
  ngOnInit(): void {
  }

}
