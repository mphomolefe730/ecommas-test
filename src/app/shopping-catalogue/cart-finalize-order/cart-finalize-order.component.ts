import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inventoryModel } from 'src/app/models/inventoryModel';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-cart-finalize-order',
  templateUrl: './cart-finalize-order.component.html',
  styleUrls: ['./cart-finalize-order.component.scss']
})
export class CartFinalizeOrderComponent implements OnInit {
  cartTotalPrice:number = 0; 
  inventory:inventoryModel={
    _id: '',
    items: [],
    seller: '',
    status: '',
    total: 0,
    user: '',
    chat: []
  }

  constructor(
    private inventoryService:InventoryService,
    private authService:AuthService,
    private activeRouter:ActivatedRoute
  ){}

  ngOnInit(): void { 
    this.authService.loggedInUser.subscribe(async (userData:any)=>{
      if (userData != null){
        this.activeRouter.params.subscribe((inventoryId:any)=>{
          this.inventoryService.getOrderById(inventoryId.id).subscribe(async (data:any)=>{
            this.inventory = data;
          })
        })
      }
    })   
  }
}
