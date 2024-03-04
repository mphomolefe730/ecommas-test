import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  shoppingCartImage = '../assets/icons/cart-shopping-solid.png';
  logoOfCompany = '../assets/icons/logo.png';
  searchicon = '../assets/icons/searchIcon.png';
  
  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.ngOnInit(); 
  }

}
