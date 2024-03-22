import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { cartModel } from 'src/app/models/cartModel';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
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
    private router:Router,
  ){}
  ngOnInit(): void {
    if (this.authService.isLoggedIn() == null) this.router.navigate(['/sign-in']);
    this.authService.loggedInUser.subscribe((data:any)=>{
      this.shoppingCart.userId=data.userId;
      this.cartService.getCartByUserId(data.userId).subscribe((data:any)=>{
        this.shoppingCart=data;
        this.shoppingCart.items.forEach((item)=>{
          this.cartTotalPrice += item.price
        })
      })
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
}