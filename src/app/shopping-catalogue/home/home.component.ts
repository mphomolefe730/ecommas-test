import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/models/productModel';
import { HomeService } from 'src/app/services/home.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { categoryModel } from 'src/app/models/categoryModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:productModel[] = [];
  recentVisited:productModel[]=[];
  activeCategory:any[]=[];
  productsToShow:productModel[]=[];
  
  demoImage = '../../../assets/images/air-force-1.webp';
  
  constructor(
    private homeService:HomeService,
    private productService:ProductService,
    private categoryService:CategoryService,
    private router:Router,
    ){}
    
  ngOnInit(){
    //get all the recent viewed items ##################################
    let tempRecentlyViewedString:string = String(this.productService.recentlyViewed);
    if (tempRecentlyViewedString.length!=0){
      JSON.parse(tempRecentlyViewedString).forEach((productId:string)=>{
        this.productService.getProductById(productId).subscribe((data:any)=>{
          this.recentVisited.push(data);
        });
      })
    }
    //get all the active categories and place items in variables ######
    this.categoryService.getActiveCategory().subscribe((data:any)=>{
      const tempData:categoryModel[] = data
      tempData.forEach((category:categoryModel)=>{
        this.activeCategory.push(category);
      });
      this.activeCategory.forEach((category:categoryModel)=>{
        this.categoryService.getByCategory(category._id).subscribe((itemsInCategory:any)=>{
          itemsInCategory.forEach((record:productModel)=>{
            this.productsToShow.unshift(record);
          })
        })
      });
    });
  }
  async viewProduct(productId:string,productName:string){
    this.productService.addToRecentlyViewedProduct(productId);
    const productNameFormated = productName.split(' ').join('-');
    this.router.navigate([`product/${productNameFormated}/pd/${productId}`]);
  }
}
