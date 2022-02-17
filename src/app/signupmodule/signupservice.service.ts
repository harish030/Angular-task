import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  login=false;
  devicename:any;
  mobilenumber:any;
 signup=false;
 id:any;
 getData():Observable<any>{
  return this.http1.get('http://localhost:3000/mobilenumber/');
}
putData(data:any):Observable<object>{
  return this.http1.post('http://localhost:3000/mobilenumber/',data);
}
deleteData(id:any):Observable<any>{
  return this.http1.delete(`http://localhost:3000/mobilenumber/${id}`)
}
updateData(id:any,data:any):Observable<any>{
  return this.http1.put(`http://localhost:3000/mobilenumber/${id}`,data)
}
deleteDataProducts(id:any):Observable<any>{
  return this.http1.delete(`http://localhost:3000/products/${id}`)
}
getDataProducts():Observable<any>{
  return this.http1.get('http://localhost:3000/products/');
}
putDataProducts(data:any):Observable<object>{
  return this.http1.post('http://localhost:3000/products/',data);
}
getItemDetails():Observable<any>{
  return this.http1.get('http://localhost:3000/itemdetails/');
}
putItemDetails(data:any):Observable<any>{
  return this.http1.post('http://localhost:3000/itemdetails/',data);
}

  constructor(private http1:HttpClient) { }
}
