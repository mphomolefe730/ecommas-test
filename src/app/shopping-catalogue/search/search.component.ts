import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productModel } from 'src/app/models/productModel';
import { userModel } from 'src/app/models/userModel';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit{
  productsToShow:productModel[]=[];
  // seller:userModel[]=[];
  seller:{profileImage:string,name:string,_id:string}[]=[]
  businesses:any=[]
  progressLoader:string = '../../../assets/icons/loader.gif';
  searching:boolean=true;
  constructor(
    private userService:UserService,
    private productService:ProductService,
    private activeRoute:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data)=>{
      const { query } = data;
      this.productService.getProductBySearch({search:query}).subscribe((items:any)=>{
        this.searching=false;
        this.productsToShow=[];
        this.seller=[];
        this.businesses=[];
        items.forEach((product:productModel)=>{
          this.productsToShow.push(product);
        })
        this.userService.searchForSeller({search:query}).subscribe({
          next:(object:any)=>{
            if (object.seller) object.seller.forEach((person:any)=>this.seller.push(person));
            if (object.businesses) object.businesses.forEach((businessObject:any)=>this.businesses.push(businessObject));
          },
          error:(err)=>{
            console.log(err);
          }
        })
      });
    });
  }
  async viewProduct(productId:string,productName:string){
    this.productService.addToRecentlyViewedProduct(productId);
    const productNameFormated = productName.split(' ').join('-');
    this.router.navigate([`product/${productNameFormated}/pd/${productId}`]);
  }
  viewSellerProfile(id: string) {
    this.router.navigate([`./profile/${id}`])
  }
}