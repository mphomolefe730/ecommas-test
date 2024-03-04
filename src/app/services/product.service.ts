import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {
  recentlyViewed:string|null='';
  recentlySearched:string|null='';
  
  constructor() { }
  ngOnInit(): void {
    this.recentlyViewed = localStorage.getItem("smartOne_recentlyViewed");
    this.recentlySearched = localStorage.getItem("smartOne_recentlySearched");
    console.log(this.recentlySearched,this.recentlyViewed);
    if (this.recentlyViewed == null) localStorage.setItem("smartOne_recentlyViewed","[]");
    if (this.recentlySearched == null) localStorage.setItem("smartOne_recentlySearched","[]");
  }

  addToRecentlyViewedProduct(id:string){
    const temprecentlyViewed:string[] = JSON.parse(String(this.recentlyViewed));
    temprecentlyViewed.unshift(id);
    localStorage.clear();
    localStorage.setItem("smartOne_recentlyViewed",JSON.stringify(temprecentlyViewed));
    this.recentlyViewed = localStorage.getItem("smartOne_recentlyViewed");
  }
}