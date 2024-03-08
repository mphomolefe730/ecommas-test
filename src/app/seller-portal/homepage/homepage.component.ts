import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  sideLinks:{name:string,link:string,image:string}[]=[{
    name:"Home",link:"/seller",image:""
  },{
    name:"Orders",link:"/orders",image:""
  },{
    name:"Products",link:"/products",image:""
  },{
    name:"Customers",link:"/customer",image:""
  },{
    name:"Finances",link:"/finances",image:""
  },{
    name:"Marketing",link:"/marketing",image:""
  },]
  constructor(
    private router:ActivatedRoute
  ){}
  ngOnInit(): void {
    console.log(this.router.url);
  }
}
