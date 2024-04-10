import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private http:HttpClient,
  ) { }

  getAllSellerOrders(sellerId:string){
    return this.http.get(`${environment.renderApiLink}/api/inventory/${sellerId}`);
  }

  getSellerInventory(id: string) {
    return this.http.get(`${environment.renderApiLink}/api/inventory/${id}`);
  }
}
