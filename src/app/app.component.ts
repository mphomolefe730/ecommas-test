import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from './services/role.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  notSeller:boolean=false;
  deviceWidth=screen.width;
  
  constructor(
    private productService:ProductService,
    private roleService:RoleService,
    private authService:AuthService
  ){}

  ngOnInit(): void {
    this.productService.ngOnInit();
    this.roleService.ngOnInit
    if (this.authService.isLoggedIn()){
      const token = this.authService.getToken();
      const tempUser = JSON.parse(atob(token!.split('.')[1]));
      this.authService.user.next(tempUser);
      console.log(tempUser);
    }
  }

}
