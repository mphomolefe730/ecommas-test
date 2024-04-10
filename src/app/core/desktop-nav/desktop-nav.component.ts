import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss']
})
export class DesktopNavComponent {
  shoppingCartImage = './assets/icons/cart-shopping-solid.png';
  logoOfCompany = './assets/icons/logo.svg';
  searchicon = './assets/icons/searchIcon.png';
  searchForm:FormGroup = new FormGroup({
    search: new FormControl(''),
  })

  viewDropDown:boolean = false; 
  constructor(
    private router:Router,
    private authService: AuthService,
  ){}
  
  viewOptions() {
    this.viewDropDown = !this.viewDropDown;
  }

  signOut(){
    console.log("signing out")
    this.authService.logOut();
  } 

  searchForProduct(){
    const { search } = this.searchForm.value;
    this.router.navigate([`/search/${search}`]);
  }
}
