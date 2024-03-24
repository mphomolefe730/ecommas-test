import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { RoleService } from './services/role.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

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
    private authService:AuthService,
    private router:Router
    ){}
    
  async ngOnInit() {
    this.productService.ngOnInit();
    await this.roleService.ngOnInit();
    setTimeout(async ()=>{
      if (this.authService.isLoggedIn()){
        const token = this.authService.getToken();
        const tempUser = JSON.parse(atob(token!.split('.')[1]));
        console.log(tempUser);
        const role = await this.roleService.getUserRole(tempUser.role);
        if (role[0].role == 'seller') {
          this.authService.isSeller = true;
          this.router.navigate(['/seller']);
        }else{
          this.authService.isSeller = false;
        }
        this.authService.user.next(tempUser);
      }
    },5000);
  }

}
