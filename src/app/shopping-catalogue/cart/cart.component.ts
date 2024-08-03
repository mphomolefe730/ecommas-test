import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { cartModel } from 'src/app/models/cartModel';
import { orderStatus } from 'src/app/models/orderStatus'
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartTotalPrice:number = 0; 
  extraText:string|null=null;
  shoppingCart: cartModel={
    _id:'',
    userId:'',
    items:[{
      productId:{
        _id:'',
        name:'', 
        price:0,
        image:'',
        description:'',
        seller:''
      },
      quantity:0,
      price:0
    }]
  };

  constructor(
    private inventoryService:InventoryService,
    private cartService:CartService,
    private authService:AuthService,
    private router:Router,
    private toaster:NgToastService,
  ){}

  ngOnInit(): void {
    if (this.authService.isLoggedIn() == null) this.router.navigate(['/sign-in']);
    this.authService.loggedInUser.subscribe(async (data:any)=>{
      if (data != null){
        this.shoppingCart.userId=await data.userId;
        this.cartService.getCartByUserId(data.userId).subscribe(async (data:any)=>{
          this.shoppingCart=await data;
          this.shoppingCart.items.forEach((item)=>{
            this.cartTotalPrice += item.price;
          })
        })
      }
    })
  }
  
  changeValue(event:any,productId:string){
    if (event.type == 'change') {
      this.cartTotalPrice = 0;
      this.shoppingCart.items.forEach((item)=>{
        if (item.productId._id == productId){
          item.quantity = event.target.value;
          item.price = item.productId.price * item.quantity;
        } 
        this.cartTotalPrice += item.price
      })
    }
  }

  removeFromCart(productId:string){
    this.shoppingCart.items = this.shoppingCart.items.filter((item)=>item.productId._id!==productId);
    this.cartTotalPrice = 0;
    this.cartService.updateUserCart(this.shoppingCart.userId,this.shoppingCart).subscribe((cartData:any)=>{
      if (cartData.status == "SUCCESS"){
        this.toaster.success({
          detail:cartData.status,
          summary: cartData.message
        });
        this.shoppingCart.items.forEach((item)=>{
          this.cartTotalPrice += item.productId.price * item.quantity;
        })      
      }else{
        this.toaster.error({
          detail:cartData.status,
          summary: cartData.message
        });
      }
    })
  }

  checkout(){
    const completeOrder = {
      user: this.shoppingCart.userId,
      seller: this.shoppingCart.items[0].productId.seller,
      items: this.shoppingCart.items,
      status: orderStatus.unfurfilled,
      chat:[{chat: this.extraText}],
      total: this.cartTotalPrice
    }
    if (!completeOrder) {
      this.toaster.error({
        detail:"ERROR",
        summary: "Order not furfilled"
      });
      return
    }
    this.inventoryService.addToSellerInventory(completeOrder).subscribe({
      next:(feedback:any)=>{
        this.shoppingCart.items = [];
        this.cartService.updateUserCart(this.shoppingCart.userId,this.shoppingCart).subscribe((cartData:any)=>{
          if (cartData.status == "SUCCESS"){
            this.toaster.success({
              detail:cartData.status,
              summary: "Product(s) succussfully placed"
            });
            this.cartTotalPrice = 0;     
            this.router.navigate(
              [`cart/final-order/${feedback.message._id}`],
            );
          }else{
            this.toaster.error({
              detail:cartData.status,
              summary: cartData.message
          });
          }
        })
      },
      error:(feedback:any)=>{
        console.log(feedback);
      }
    })
  }
}