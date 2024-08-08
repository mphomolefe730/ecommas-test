import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { categoryModel } from 'src/app/models/categoryModel';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:productModel[] = [];
  recentVisited:any[]=[];
  activeCategory:any[]=[];
  productsToShow:productModel[]=[];
  containerForDelayEvent:any;
  menuStatus:boolean=false;
  numberClickedOn:number=0;
  sellerId:string='';

  extraMenuTabs:{name:string,path:string,icon:string,action:Function|null}[]=[
    {
      name:"View Seller",path:"",icon:"",action:null
    }
  ]
    
  constructor(
    private productService:ProductService,
    private categoryService:CategoryService,
    private router:Router,
    private toaster:NgToastService,
  ){}
    
  ngOnInit(){
    //get all the recent viewed items ##################################
    let tempRecentlyViewedString:string = String(this.productService.recentlyViewed);
    let arrOfItems = JSON.parse(tempRecentlyViewedString);
    if (arrOfItems.length != 0){
      arrOfItems.forEach((productId:string)=>{
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
        this.categoryService.getByCategory(category._id,{page:0}).subscribe((itemsInCategory:any)=>{
          itemsInCategory.forEach((record:productModel)=>{
            let checker = this.productsToShow.find((a)=> a._id == record._id);
            if (checker === undefined) this.productsToShow.unshift(record);
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

  showMoreOptions(index:number,event:any=-1){
    if(event!=-1){
      event.preventDefault();
    }
    this.containerForDelayEvent = setTimeout(() => {
      this.menuStatus=true; //change the status of menu to show
      //get index of seller path on extra tab menu
      let indexOfSellerMenu = this.extraMenuTabs.findIndex((menuItem)=>menuItem.name == "View Seller");
      if (indexOfSellerMenu != -1){
        //if tab exist, as the path to out seller of product
        this.extraMenuTabs[indexOfSellerMenu].path = 
        `profile/${this.recentVisited[index].seller["_id"]}`;
      }
      this.numberClickedOn = index;
    }, 2000);
  }

  removeMouseDown(productId:string,productName:string){
    clearTimeout(this.containerForDelayEvent);
    if (!this.menuStatus) this.viewProduct(productId,productName);
    setTimeout(() => {
      this.menuStatus=false;
    }, 5000);
  }

  addToCart(){
    this.toaster.success({
      detail: "SUCCESS",
      summary: "Product added to cart"
    });
  }
}
