import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  product:any[]=[];
  userId:string='';
  page:number=0;
  orderTypes:string[]=["UNFURFILLED", "COMPLETE", "DECLINED", "PENDING", "CANCELLED"];
  
  constructor(
    private inventoryService:InventoryService,
    private authService:AuthService,
    private toaster:NgToastService,
  ){}

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(async (userInformation)=>{
      this.userId= await userInformation.userId;
      this.inventoryService.getInventoryBySellerAndCatergory(this.userId, this.orderTypes[0],this.page).subscribe({
        next:(data:any)=>{
          this.product = data.order;
        },
        error:(data:any)=>{
          console.log(data);
        }
      })
    })
  }

  filterOrder(event:any){
    this.product=[];
    this.inventoryService.getInventoryBySellerAndCatergory(this.userId, event.target.value,this.page).subscribe({
      next:(data:any)=>{
        this.product = data.order;
      },
      error:(data:any)=>{
        console.log(data);
      }
    })
  }
  updateOrderStatus(numberId:number,status:string){
    this.inventoryService.updateInventoryStatus(numberId,status).subscribe({
      next:(data:any)=>{
        if (data.message == "success"){
          this.toaster.success({ detail: data.message, summary:"Order success update. Now in pending stage"});
          const index = this.product.indexOf(numberId);
          console.log("before removing from list", this.product);
          this.product.splice(index,1);
          console.log("after removing from list", this.product);
          this.product.push(data.order);
          console.log("final list", this.product);
        }
      },
      error:(data:any)=>{
        this.toaster.error({detail:data.message,summary:data.error})
        console.log(data);
      }
    })
  }
}
