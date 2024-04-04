import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  product:any;
  userId:string='';
  
  constructor(
    private inventoryService:InventoryService,
    private authService:AuthService,
  ){}

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(async (data)=>{
      this.userId= await data.userId;
      this.inventoryService.getAllSellerOrders(this.userId).subscribe((data)=>{
        this.product= data;
      });
    })
  }
}
