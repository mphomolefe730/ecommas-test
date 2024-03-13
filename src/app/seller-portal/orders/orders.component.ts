import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  product:any;

  constructor(
    private inventoryService:InventoryService
  ){}

  ngOnInit(): void {
    this.inventoryService.getAllSellerOrders('65d7386a18700152531d0220').subscribe((data)=>{
      this.product= data;
      console.log(data);
    });
  }
}
