import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss']
})
export class DesktopNavComponent implements OnInit{
  shoppingCartImage = './assets/icons/cart-shopping-solid.png';
  logoOfCompany = './assets/icons/logo.svg';
  searchicon = './assets/icons/searchIcon.png';
  searchForm:FormGroup = new FormGroup({
    search: new FormControl(''),
  })
  searchHistory:string[]|null=null;
  showHistory:boolean=false;

  constructor(
    private router:Router,
    private productService:ProductService
  ){}

  ngOnInit(): void { 
  }
  
  searchForProduct(){
    const { search } = this.searchForm.value;
    this.productService.addToRecentlySearchProducts(search);
    this.router.navigate([`/search/${search}`]);
  }
  showRecentMenu(){
    const tempStorage:string[] = JSON.parse(String(localStorage.getItem('smartOne_recentlySearched')));
    if (tempStorage!=null || tempStorage!='') {
      this.searchHistory = tempStorage;
    };  
    this.showHistory=true;
  }
}
