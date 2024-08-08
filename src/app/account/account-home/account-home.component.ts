import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.scss']
})
export class AccountHomeComponent implements OnInit{
  userInformation:{name:string,id:string}={
    name:'',
    id:'',
  }
  tabLinks:{name:string,link:string,icon:string}[]=[{
    name:"Account",link:`/account/details/`,icon:"fa-regular fa-user"
  },{
    name:"Order",link:`/account/orders/`,icon:"fa-solid fa-clock-rotate-left"
  }]

  signoutButton:{name:string,icon:string}={
    name:"Sign-Out",icon:"fa-solid fa-arrow-right-from-bracket"
  }

  constructor(
    private authService:AuthService,
    private roleService:RoleService,
    private router:Router
  ){}

  ngOnInit(): void {
    // setTimeout(async ()=>{
    //   if (this.authService.isLoggedIn()){
    //     this.authService.loggedInUser.subscribe(async (data)=>{
    //       this.userInformation.name = await data.name;
    //       this.userInformation.id = await data.userId;
    //     })
        // const token = this.authService.getToken();
        // const tempUser = JSON.parse(atob(token!.split('.')[1]));
        // const role = await this.roleService.getUserRole(tempUser.role);
        // if (role[0].role == 'seller') {
        //   this.authService.isSeller = true;
        //   this.router.navigate(['/seller']);
        // }else{
        //   this.authService.isSeller = false;
        // }
        // this.authService.user.next(tempUser);
    //   }
    // }, 2000);
  }
  signOut(){
    this.authService.logOut();
  }
}
