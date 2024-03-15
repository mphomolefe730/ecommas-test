import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { productModelSeller } from "../../models/productModelSeller";
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  addIconImage = '../../assets/icons/addicon.png';
  sellerProducts:productModelSeller[]=[];
  demoImage = '../../assets/images/air-force-1.webp';
  editIconImage = '../../assets/icons/editicon.png';

  constructor(
    private productService:ProductService,
    private route:Router
  ){}

  ngOnInit(): void {
    this.productService.getAllSellerProducts('65d7386a18700152531d0220').subscribe((products)=>{
      let sellerItem:any = products;
      sellerItem.forEach((item:productModelSeller)=>{
        this.sellerProducts.push(item);
      });
    })
  }
  viewProduct(id:any){
    this.route.navigate([`/seller/products/edit/`,id]);
  }
}
