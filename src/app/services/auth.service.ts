import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from './loggin.service';
import { BehaviorSubject } from 'rxjs';
import { RoleService } from './role.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new BehaviorSubject<any>(null);
  public loggedInUser = this.user.asObservable();
  public isSeller = false;

  constructor(
    private router:Router,
    private logginService:LogginService,
    private roleService:RoleService,
    private toaster: NgToastService
  ) { }


  getToken():string|null{
    return sessionStorage.getItem('smartOne_token');
  }
  isLoggedIn(){
    return this.getToken() != null;
  }
  logOut(){
    sessionStorage.removeItem('smartOne_token');
    sessionStorage.removeItem('smartOne_user');
    this.router.navigate(['/']);
  }
  logIn(values:{email:string,hashedPassword:string}):void{
    this.logginService.login(values).subscribe((data:any)=>{
      if(data.message == 'login successful') {
        sessionStorage.removeItem("smartOne_User");
        sessionStorage.removeItem("smartOne_token");
        const userDetail = JSON.parse(atob(data.token.split('.')[1]));
        sessionStorage.setItem("smartOne_token",JSON.stringify(data.token));
        sessionStorage.setItem("smartOne_User", JSON.stringify({name: userDetail.name, role:userDetail.role}));
        const userRole:any = this.roleService.role.filter((a)=> a._id == userDetail.role);
        if (userRole[0].role == "seller"){
          this.isSeller = true;
          this.router.navigate(['/seller']);
          this.toaster.success({detail:"SUCCESS",summary:data.message,duration:2000,position:"topCenter"});
        }else{
          this.isSeller = false;
          this.router.navigate(['/']);
          this.toaster.success({detail:"SUCCESS",summary:data.message,duration:2000,position:"topCenter"});
        }
      }else{
        this.toaster.error({detail:"ERROR",summary:data.message,duration:20000,position:"topCenter"});
      }
    })
  }
}
