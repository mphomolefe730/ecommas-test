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
  seller:userModel[]=[];
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
        items.forEach((product:productModel)=>{
          this.productsToShow.push(product);
        })
        this.userService.searchForUser({search:query}).subscribe((users:any)=>{
          users.forEach((person:any)=>this.seller.push(person));
          console.log(users);
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