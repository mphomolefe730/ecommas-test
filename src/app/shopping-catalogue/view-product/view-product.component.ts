import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productModel } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit{
  purchasing:string='loading';
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

  constructor(
    private activeRouter:ActivatedRoute,
    private router:Router,
    private productService:ProductService
  ){}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((data:any)=>{
      this.productService.getProductById(data.productid).subscribe(async (item:any)=>{
        this.productDetails =item;
        this.productDetails.seller.email='';
        this.productDetails.seller.surname='';
        this.productDetails.seller.number=0;
      })
    })
  }
}
