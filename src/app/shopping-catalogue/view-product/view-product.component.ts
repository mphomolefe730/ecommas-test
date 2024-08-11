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
  buttonDisabled:boolean = true;
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
      hashedPassword: '',
      profileImage: '',
      role: {
        id: '',
        name: ''
      },
      verified: false
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
  businessInfo:string='';
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
  sellersid: any;
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
      if (data!=null){
        this.user = await data.name;
        this.userId = await data.userId;
        this.shoppingCart.userId=this.userId;
        this.cartId = data.cartId;
        this.cartService.getCartByUserId(this.userId).subscribe(async (cart:any)=>{
          this.shoppingCart= await cart;
        })
      }

      this.activeRouter.params.subscribe((data:any)=>{
        this.productService.getProductById(data.productid).subscribe((item:any)=>{
          this.sellersid = item.productInfo.seller._id;
          this.productSellerId = item.productInfo.seller._id;
          this.productDetails = item.productInfo;
          this.productDetails.seller.email='';
          this.productDetails.seller.surname='';
          this.productDetails.seller.number=0;
          if(item.businessInfo){
            this.businessInfo = item.businessInfo[0].businessName
            console.log(item.businessInfo)
          }
          this.shoppingCart.items.forEach((productItem:any)=>{
            if (productItem.productId._id == data.productid) this.purchasing= 'removeFromCart';
          })
          this.buttonDisabled=false;
        })
      });
    });    
  }

  copyToClipBoard(){
    this.clipboard.copy('https://ecommerceconnect.co.za/#'+this.router.url);
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
    let duplicatedProduct = false;
    await this.shoppingCart.items.forEach((productItem)=>{
      if (item.productId._id == productItem.productId._id){
        this.toaster.error({
          detail:"ERROR",
          summary: "Product already exist in cart",
          duration: 3000
        });
        this.purchasing= 'removeFromCart';
        duplicatedProduct = true;
      }
      return;
    })
    if (duplicatedProduct == false){
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
  }

  updateNumber(event:any){
    this.selectedOption=event.target.value;
  }

  viewSellerProfile(id: string) {
    this.router.navigate([`./profile/${id}`])
  }

  removeItemFromCart(productId:string){
    this.shoppingCart.items = this.shoppingCart.items.filter((item)=>item.productId._id!==productId);
    this.cartService.updateUserCart(this.userId,this.shoppingCart).subscribe((data:any)=>{
      if (data.status == "SUCCESS"){
        this.toaster.success({
          detail:data.status,
          summary: data.message
        });
        this.purchasing= 'addToCart';
      }else{
        this.toaster.error({
          detail:data.status,
          summary: data.message
        });
        this.purchasing= 'removeFromCart';
      }
    });
  }
}
