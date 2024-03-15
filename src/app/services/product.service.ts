import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { productModel } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  recentlyViewed:string|null='';
  recentlySearched:string|null='';
  
  constructor(
    private http:HttpClient
  ) { }
  
  ngOnInit(): void {
    this.recentlyViewed = localStorage.getItem("smartOne_recentlyViewed");
    this.recentlySearched = localStorage.getItem("smartOne_recentlySearched");
    if (this.recentlyViewed == null) localStorage.setItem("smartOne_recentlyViewed","[]");
    if (this.recentlySearched == null) localStorage.setItem("smartOne_recentlySearched","[]");
  }

  addToRecentlyViewedProduct(id:string){
    let temprecentlyViewed:string[] = JSON.parse(String(this.recentlyViewed));
    temprecentlyViewed.unshift(id);
    localStorage.clear();
    localStorage.setItem("smartOne_recentlyViewed",JSON.stringify(temprecentlyViewed));
    this.recentlyViewed = localStorage.getItem("smartOne_recentlyViewed");
  }
  
  
  getAllProducts(){
    return this.http.get(`${environment.renderApiLink}/api/products/`);
  }
  getProductById(id:string){
    return this.http.get(`${environment.renderApiLink}/api/products/${id}`);
  }
  getProductByCategory(category:string){
    return this.http.get(`${environment.renderApiLink}/api/category/}`);
  }

  getAllSellerProducts(sellerId:string){
    return this.http.get(`${environment.renderApiLink}/api/products/seller/${sellerId}`);
  }

  updateproductById(productId:string, product:productModel){
    return this.http.put(`${environment.renderApiLink}/api/products/${productId}`,product);
  }
}