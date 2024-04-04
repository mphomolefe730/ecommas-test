import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{

  constructor(
    private http:HttpClient
  ) { }
  ngOnInit(): void {
    
  }

  getCartByUserId(id:string){
    return this.http.get(`${environment.renderApiLink}/api/cart/${id}`);
  }
  updateUserCart(userId:string,object:any){
    return this.http.put(`${environment.renderApiLink}/api/cart/${userId}`,object);
  }
}
