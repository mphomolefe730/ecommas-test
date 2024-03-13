import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    name:"Customers",link:"/seller/customer",image:""
  },{
    name:"Finances",link:"/seller/finances",image:""
  },{
    name:"Marketing",link:"/seller/marketing",image:""
  },]
  constructor(
    private router:ActivatedRoute
  ){}
  ngOnInit(): void {
  }
}
