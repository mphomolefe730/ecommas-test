import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productModel } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';
import {Clipboard} from '@angular/cdk/clipboard';
import { AppComponent } from 'src/app/app.component';
import { cartModel } from 'src/app/models/cartModel';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit{
  purchasing:string='addToCart';
  productSellerId:string='';
  productDetails:productModel={
    name: '',
    _id: '',
    price: 0,
    image: '',
    description: '',
    stock: 0,
    seller: {
      name: "",
      surname: '',
      email: '',
      number: 0,
      businessDescription:'',
      businessName:'',
      hashedPassword: '',
      role: {
        id:'',
        name:''
      }
    },
    categories: []
  };
  productOptions:number[]=[
    1,2,3,4,5,6
  ];
  cartId:string='';
  user:string='';
  userId:string='';
  selectedOption:number=1;
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
  inCartSellerName:string='';

  constructor(
    private activeRouter:ActivatedRoute,
    private router:Router,
    private productService:ProductService,
    private clipboard:Clipboard,
    public app:AppComponent,
    private authService:AuthService,
    private toaster:NgToastService,
    private cartService:CartService
  ){}

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(async (data)=>{
      if (data==null)return;
      this.user = await data.name;
      this.userId = await data.userId;
      this.shoppingCart.userId=this.userId;
      this.cartId = data.cartId;

      this.cartService.getCartByUserId(this.userId).subscribe(async (cart:any)=>{
        this.shoppingCart= await cart;
      })

      this.activeRouter.params.subscribe((data:any)=>{
        this.productService.getProductById(data.productid).subscribe((item:any)=>{
          this.productSellerId = item.seller._id
          this.productDetails = item;
          this.productDetails.seller.email='';
          this.productDetails.seller.surname='';
          this.productDetails.seller.number=0;
          this.shoppingCart.items.forEach((productItem:any)=>{
            if (productItem.productId._id == data.productid) this.purchasing= 'removeFromCart';
          })
        })
      });
    });
  }

  copyToClipBoard(){
    this.clipboard.copy(this.router.url);
    this.toaster.success({detail: "SUCCESS",summary:'link copied to clipboard',duration:2000});
  }

  async addItemToCart(){
    if (this.userId===''){
      this.router.navigate(['/sign-in']);
      return ;
    }
    
    this.purchasing= 'loading';
    const item =await {
      productId:{
        _id:this.productDetails._id,
        name:this.productDetails.name,
        price: this.productDetails.price,
        image: this.productDetails.image,
        description: this.productDetails.description,
        seller: this.productSellerId
      },
      quantity:this.selectedOption,
      price:this.productDetails.price*this.selectedOption
    }

    await this.shoppingCart.items.push(item);
    this.cartService.updateUserCart(this.userId,this.shoppingCart).subscribe((data:any)=>{
      if (data.status == "SUCCESS"){
        this.toaster.success({
          detail:data.status,
          summary: data.message
        });
        this.purchasing= 'removeFromCart';
      }else{
        this.toaster.error({
          detail:data.status,
          summary: data.message
        });
        this.purchasing= 'addToCart';
      }
    });
  }

  updateNumber(event:any){
    this.selectedOption=event.target.value;
  }
}
