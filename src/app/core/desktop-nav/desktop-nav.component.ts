import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss']
})
export class DesktopNavComponent {
  shoppingCartImage = './assets/icons/cart-shopping-solid.png';
  logoOfCompany = './assets/icons/logo.png';
  searchicon = './assets/icons/searchIcon.png';
  searchForm:FormGroup = new FormGroup({
    search: new FormControl(''),
  })
  constructor(
    private router:Router
  ){}
  
  searchForProduct(){
    const { search } = this.searchForm.value;
    this.router.navigate([`/search/${search}`]);
  }
}
