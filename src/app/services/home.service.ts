import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http:HttpClient
  ) { }
  
  getAllProducts(){
    return this.http.get(`${environment.renderApiLink}/api/products/`);
  }
  getProductById(id:string){
    return this.http.get(`${environment.renderApiLink}/api/products/${id}`)
  }
}
