import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  sideLinks:{name:string,link:string,image:string}[]=[{
    name:"Home",link:"/seller/home",image:""
  },{
    name:"Orders",link:"/seller/orders",image:""
  },{
    name:"Products",link:"/seller/products",image:""
  },{
    name:"Business Manager",link:"/seller/business",image:""
  },{
    name:"Customers",link:"/seller/customer",image:""
  },{
    name:"Finances",link:"/seller/finances",image:""
  },{
    name:"Marketing",link:"/seller/marketing",image:""
  },]
  constructor(
    private app:AppComponent
  ){}
  ngOnInit(): void {
    setTimeout(()=>this.app.notSeller=true,500);
  }
}
