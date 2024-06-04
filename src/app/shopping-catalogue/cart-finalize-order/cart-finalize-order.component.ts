import { Component, OnInit } from '@angular/core';
import { cartModel } from 'src/app/models/cartModel';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-finalize-order',
  templateUrl: './cart-finalize-order.component.html',
  styleUrls: ['./cart-finalize-order.component.scss']
})
export class CartFinalizeOrderComponent implements OnInit {
  cartTotalPrice:number = 0; 
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
    private cartService:CartService,
    private authService:AuthService,
  ){}

  ngOnInit(): void { 
    this.authService.loggedInUser.subscribe(async (userData:any)=>{
      if (userData != null){
        console.log(userData)
        this.cartService.getCartByUserId(userData.userId).subscribe(async (data:any)=>{
          this.shoppingCart=await data;
          this.shoppingCart.items.forEach((item)=>{
            this.cartTotalPrice += item.price
          })
          console.log(data)
        })
      }
    })   
  }
}
