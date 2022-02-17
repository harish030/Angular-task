import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupserviceService } from '../signupservice.service';

@Component({
  selector: 'app-personinformation',
  templateUrl: './personinformation.component.html',
  styleUrls: ['./personinformation.component.scss']
})
export class PersoninformationComponent implements OnInit {
  details=[
    {
      state:"Tamil Nadu",
      districts:[
        {
          district:"Thanjavur",
          
        },
        {
          district:"Theni",
          
        },
        {
          district:"Chennai",
          
        }
      ]
    },
    {
      state:"Karnataka",
      districts:[
        {
          district:"Bagalkot",
          
        },
        {
          district:"Bengaluru",
          
        },
        {
          district:"Kolar",
          
        }
      ]
    },
    {
      state:"Kerala",
      districts:[
        {
          district:"kochin",
          
        },
        {
          district:"Alapuzha",
         
        },
        {
          district:"Munnar",
         
        }

      ]
    }

    
  ]
  information=
    {
      firstname:'',
      lastname:'',
      mobilenumber:Number(this.service.mobilenumber),
      email:'',
      address1:'',
      address2:'',
      landmark:'',
      pincode:null,
      state:'',
      district:''

    }
  
  data:any;
  id:any;
  stateData: any;
  constructor(private router:Router,private activate:ActivatedRoute,private http:HttpClient,public service:SignupserviceService) {
    this.details.forEach(item=>{
      if ("Tamil Nadu" == item.state) {
        console.log(item.districts);
        // item.districts.forEach(elem => {
        //   this.districtList.push(elem.district)
        // });
        this.districtList=item.districts;
      }

    });
    this.http.get('http://localhost:3000/mobilenumber/').subscribe((data1)=>{
      
     
       this.data=data1;
      
    })
    this.activate.queryParams.subscribe((params:any)=>{
      console.log("logs",params);
      this.id=params.data;
     
      
    });
    
    
   }
   datastorage:any;
   id2:any;
   onSubmit(re:NgForm){

    
    // this.http.post('http://localhost:3000/mobilenumber/',this.information).subscribe((data)=>{
    //   console.log(data);
     
     
    
      
    // });
    this.service.putData(this.information).subscribe(()=>{

    })
    setTimeout(() => {
    //   this.http.get('http://localhost:3000/mobilenumber/').subscribe((data)=>{
      
      
    //   this.datastorage=data;
    //   for (let index = 0; index < this.datastorage.length; index++) {
    //     const element = this.datastorage[index];
    //     if (this.service.mobilenumber == element.mobilenumber) {
    //       this.id2=element.id;
    //       this.router.navigateByUrl(`/?data=${this.id2}`);
    //     }
        
    //   }
    
      
    // });
    this.service.getData().subscribe((data)=>{
      this.datastorage=data;
      for (let index = 0; index < this.datastorage.length; index++) {
        const element = this.datastorage[index];
        if (this.service.mobilenumber == element.mobilenumber) {
          this.id2=element.id;
          this.router.navigateByUrl(`/?data=${this.id2}`);
        }
        
      }
    },error=>{
      console.log(error);
      
    })
    }, 500);
    
    
   }
   stateList:Array<any>=[];
  districtList:Array<any>=[];
   onChange1(){

    
    this.districtList=[];
    
    this.stateData= (<any>document.getElementById("state")).value;
   
    this.details.forEach(item=>{
      if (this.stateData == item.state) {
        console.log(item.districts);
        // item.districts.forEach(elem => {
        //   this.districtList.push(elem.district)
        // });
        this.districtList=item.districts;
      }

    }

    );
    
    
    
    
    
   }

  ngOnInit(): void {
  }

}
