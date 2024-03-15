import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HomepageComponent } from 'src/app/seller-portal/homepage/homepage.component';

@Component({
  selector: 'app-seller-desktop-nav',
  templateUrl: './seller-desktop-nav.component.html',
  styleUrls: ['./seller-desktop-nav.component.scss']
})
export class SellerDesktopNavComponent {
  logoOfCompany = '../../assets/icons/logo.png';
  menuShowing:boolean=false;

  constructor(
    public app:AppComponent,
    public homePage:HomepageComponent
  ){}
  showMenu(){
    this.menuShowing=!this.menuShowing;
  }
}
