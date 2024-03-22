import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categoryModel } from 'src/app/models/categoryModel';
import { productModel } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  notification:boolean=false;
  sending:boolean=false
  progressLoader = '../../../assets/icons/loader.gif';
  closeIcon = '../../../assets/icons/closeicon.png';
  demoImage = '../../../assets/images/air-force-1.webp';
  productDetails:productModel={
    name: '',
    _id: '',
    price: 0,
    image: '',
    description: '',
    stock: 0,
    categories: [],
    seller: {
      name: '',
      surname: '',
      email: '',
      number: 0,
      businessDescription:'',
      businessName:'',
      hashedPassword: '',
      role: {
        id: '',
        name: ''
      }
    }
  };
  productForm:FormGroup= new FormGroup({
    name: new FormControl(this.productDetails.name),
    price: new FormControl(this.productDetails.price),
    description: new FormControl(this.productDetails.description),
    stock: new FormControl(this.productDetails.stock),
    catergories: new FormControl(this.productDetails.categories)
  });
ngModel: any;
  constructor(
    private productService:ProductService,
    private activitedRoute:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    this.activitedRoute.params.subscribe((data)=>{
      this.productDetails._id=data['id'];
      this.productService.getProductById(this.productDetails._id).subscribe((productInformation)=>{
        const temp:any=productInformation;
        this.productDetails.categories=temp.categories;
        this.productDetails.name=temp.name;
        this.productDetails.price=temp.price;
        this.productDetails.image=temp.image;
        this.productDetails.description=temp.description;
        this.productDetails.stock=temp.stock;
        this.productDetails.seller=temp.seller;
        this.productDetails.categories=temp.categories;
      });
    });
  }
  removeCategory(id:string){
    let tempCat:categoryModel[]=[];
    this.productDetails.categories.forEach((category)=>{
      if (category._id != id) tempCat.unshift(category);
    })
    this.productDetails.categories=[];
    tempCat.forEach((cat)=>{
      this.productDetails.categories.unshift(cat)
    });
  }
  updateProduct(){
    this.sending=!this.sending;
    this.productService.updateproductById(this.productDetails._id,this.productDetails).subscribe((data)=>{
      this.sending=!this.sending;
      if (data) {
        this.notification=!this.notification;
        setTimeout(()=>this.notification=!this.notification,5000);
      }
    })
  }
  goBack(){
    this.router.navigate(['/seller/products']);
  }
}
