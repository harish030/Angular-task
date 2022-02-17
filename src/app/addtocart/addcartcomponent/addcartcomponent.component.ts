import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupserviceService } from 'src/app/signupmodule/signupservice.service';

@Component({
  selector: 'app-addcartcomponent',
  templateUrl: './addcartcomponent.component.html',
  styleUrls: ['./addcartcomponent.component.scss']
})
export class AddcartcomponentComponent implements OnInit {
  device:any;
  devicedetails={
    service:'Repair',
    brand:'Whirlpool',
    type:'Split-AC',
    ton:'1.5 Ton',
    mobilenumber:null,
    amount:399,
    device1:this.service.devicename,
    idcart:null,
    deviceimage:''
    
  }
  aircooler="../../../assets/aircooler.png";
  refri="../../../assets/refri.png";
  data:any;
  id:any;
  constructor(private activate:ActivatedRoute,public service:SignupserviceService,private router:Router,private http:HttpClient) { 
    this.device=this.service.devicename;
    // this.http.get('http://localhost:3000/mobilenumber/').subscribe((data1)=>{
      
    //   this.data=data1;
       
      
    // });
    this.service.getData().subscribe((data1)=>{
      this.data=data1;
    },error=>{
      console.log(error);
      
    })
    
    this.activate.queryParams.subscribe((params:any)=>{
      console.log("logs",params);
      this.id=params.data;
     
      
    });
    
    setTimeout(() => {
      this.data.forEach((element:any) => {
        if (element.id == this.id) {
          this.devicedetails.mobilenumber=element.mobilenumber;
        }
      });
    }, 500);
  }
  amount=399;
  servicetype:any="Repair";
  addCart(){
    
    if (this.service.login == false) {
      this.router.navigateByUrl('/signup');
    }
    else{
      if(this.service.devicename == "Refrigrator"){
        this.devicedetails.deviceimage=this.refri;
      }
      else if(this.service.devicename == "Air Conditioner"){
        this.devicedetails.deviceimage=this.aircooler;
        
      }
      this.devicedetails.idcart=this.id;
      
    //   this.http.post('http://localhost:3000/products/',this.devicedetails).subscribe((data)=>{
    //   console.log(data);
     
     
    
      
    // });
    this.service.putDataProducts(this.devicedetails).subscribe(()=>{

    })
      setTimeout(() => {
        this.router.navigateByUrl(`/cartlist?data=${this.id}`);
      },400);
      
    }
  }
  show(){
    console.log(this.devicedetails);
    
  }
  serviceChange(e:any){
    console.log(e.target.value);
    if(e.target.value == "Maintenance & Service"){
      this.servicetype="Maintenance & Service";
    }
    else if(e.target.value == "Extend Warranty"){
      this.servicetype="Extend Warranty";
    }
    else if(e.target.value == "Installation"){
      this.servicetype="Installation";
    }
    else if(e.target.value == "Uninstallation"){
      this.servicetype="Uninstallation";
    }
    else if(e.target.value == "Repair"){
      this.servicetype="Repair";
    }
    
  }
  ngOnInit(): void {
  }

}
