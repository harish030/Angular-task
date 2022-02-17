import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupserviceService } from 'src/app/signupmodule/signupservice.service';

@Component({
  selector: 'app-ordereditemcomp',
  templateUrl: './ordereditemcomp.component.html',
  styleUrls: ['./ordereditemcomp.component.scss']
})
export class OrdereditemcompComponent implements OnInit {
  itemdetails1:any;
  id:any;
  profile:any;
  profileaddress:any;
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
  constructor(private router:Router,private service:SignupserviceService,private activate:ActivatedRoute) { 
    this.service.getItemDetails().subscribe((data2)=>{
      this.itemdetails1=data2;
    });
    this.service.getData().subscribe((data2)=>{
      this.profile=data2;
    });
    setTimeout(() => {
      this.activate.queryParams.subscribe((params:any)=>{
        console.log("logs",params);
        this.id=params.data;
        for (let index = 0; index < this.profile.length; index++) {
          const element = this.profile[index];
          if (element.id == this.id) {
            this.address=element;
          }
          
        }
       
        
      });
    }, 500);
  }
  serviceDetails(){
    this.router.navigateByUrl('/servicedetails');
  }
  ngOnInit(): void {
  }

}
