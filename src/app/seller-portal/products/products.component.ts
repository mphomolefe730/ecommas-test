import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  addIconImage = '../../assets/icons/addicon.png';
  
  constructor(
    private productService:ProductService
  ){}
  ngOnInit(): void {
    this.productService.getAllSellerProducts('65d7386a18700152531d0220').subscribe((products)=>{
      console.log(products);
    })
  }
}
