import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { productModelSeller } from "../../models/productModelSeller";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  user:string='';
  userId:string='';
  addIconImage = '../../assets/icons/addicon.png';
  sellerProducts:productModelSeller[]=[];
  editIconImage = '../../assets/icons/editicon.png';

  constructor(
    private productService:ProductService,
    private route:Router,
    private authService:AuthService
  ){}

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(async (data)=>{
      this.user = await data.name;
      this.userId = await data.userId;
      this.productService.getAllSellerProducts(this.userId).subscribe((products)=>{
        let sellerItem:any = products;
        sellerItem.forEach((item:productModelSeller)=>{
          this.sellerProducts.push(item);
        });
      })
    })
  }
  viewProduct(id:any){
    this.route.navigate([`/seller/products/edit/`,id]);
  }
}
