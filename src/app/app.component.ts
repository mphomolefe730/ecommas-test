import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { RoleService } from './services/role.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { AnnouncementsService } from './services/announcements.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  notSeller:boolean=false;
  deviceWidth=screen.width;
  logo:string='../../assets/icons/logo.png';
  featureSection:{name:string,link:string}[]=[
    {name:'For Sellers', link:"/seller"},
    {name: "For Support", link: "/"}
  ]
  announcementMessage:{status:boolean,statusText:string}={status:false,statusText:''};
  
  constructor(
    private productService:ProductService,
    private roleService:RoleService,
    private authService:AuthService,
    private router:Router,
    private announcementService:AnnouncementsService
    ){}
    
  async ngOnInit() {
    this.productService.ngOnInit();
    await this.roleService.ngOnInit();
    setTimeout(async ()=>{
      if (this.authService.isLoggedIn()){
        const token = this.authService.getToken();
        const tempUser = JSON.parse(atob(token!.split('.')[1]));
        const role = await this.roleService.getUserRole(tempUser.role);
        if (role[0].role == 'seller') {
          this.authService.isSeller = true;
          this.router.navigate(['/seller']);
        }else{
          this.authService.isSeller = false;
        }
        this.authService.user.next(tempUser);
      }
    }, 5000);

    await this.announcementService.getMessage().subscribe((message:any)=>{
      message.forEach((object:any)=>this.announcementMessage=object);
    })
  }

}
