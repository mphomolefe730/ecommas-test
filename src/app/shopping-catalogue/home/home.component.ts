import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/models/productModel';
import { HomeService } from 'src/app/services/home.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:productModel[] = [];
  recentVisited:productModel[]=[];
  demoImage = '../../../assets/images/air-force-1.webp';
  constructor(
    private homeService:HomeService,
    private productService:ProductService){}

  ngOnInit(){
    let tempRecentlyViewedString:string = String(this.productService.recentlyViewed);
    this.homeService.getAllProducts().subscribe((data:any)=>{
      data.forEach((item:any)=> this.products.push(item));
      console.log(this.products)
    });
    if (tempRecentlyViewedString.length!=0){
      JSON.parse(tempRecentlyViewedString).forEach((productId:string)=>{
        this.homeService.getProductById(productId).subscribe((data:any)=>{
          this.recentVisited.push(data);
        });
      })
    }
    // this.productService.addToRecentlyViewedProduct("65d728e085c14d3f64eb4685");
  }
}
