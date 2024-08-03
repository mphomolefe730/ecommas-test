import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { inventoryModel } from '../models/inventoryModel';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private http:HttpClient,
  ) { }

  getAllSellerOrders(sellerId:string){
    return this.http.get(`${environment.renderApiLink}/api/inventory/seller/${sellerId}`);
  }
  getOrderById(id:string){
    return this.http.get(`${environment.renderApiLink}/api/inventory/${id}`)
  }
  addToSellerInventory(inventory:any){
    return this.http.post(`${environment.renderApiLink}/api/inventory/add/`,inventory);
  }
}
