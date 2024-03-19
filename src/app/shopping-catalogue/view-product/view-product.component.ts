import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productModel } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';
import {Clipboard} from '@angular/cdk/clipboard';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit{
  purchasing:string='addToCart';
  demoImage = '../../../assets/images/air-force-1.webp';
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
      role: {
        id:'',
        name:''
      }
    },
    categories: []
  };
  productOptions:string[]=[
    "one",
    "two",
    "three"
  ];
  notification:boolean=false;
  notficationMessage:string = "link copied to clipboard";

  constructor(
    private activeRouter:ActivatedRoute,
    private router:Router,
    private productService:ProductService,
    private clipboard:Clipboard,
    public app:AppComponent
  ){}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((data:any)=>{
      this.productService.getProductById(data.productid).subscribe((item:any)=>{
        this.productDetails = item;
        this.productDetails.seller.email='';
        this.productDetails.seller.surname='';
        this.productDetails.seller.number=0;
      })
    });
  }
  copyToClipBoard(){
    this.clipboard.copy(this.router.url);
    this.notification=!this.notification;
    setTimeout(()=>this.notification=!this.notification,1000);
  }
  addItemToCart(){
    this.purchasing= 'loading';
  }
}
