import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewBook=()=>{
    return this.http.get("http://localhost:8080/viewBook")
  }
  addBook=(data:any)=>{
    return this.http.post("http://localhost:8080/AddBook",data)
  }
}
