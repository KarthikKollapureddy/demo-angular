import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }

  getCreateOrder(){
    console.log("Url trying to hit is: http://46.202.162.137:8000/createorder");
    
    return this.http.get(`http://46.202.162.137:8000/createorder`,{responseType: 'text' as 'json'})
  }
  getHello(){
    return this.http.get(`http://46.202.162.137:8000/`);
  }

}
