import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-business-home',
  templateUrl: './business-home.component.html',
  styleUrls: ['./business-home.component.scss']
})
export class BusinessHomeComponent implements OnInit{
  user:string='';
  // routingParent:string = '/seller/business/';
  sideLinks:{name:string,link:string,image:string}[]=[{
    name:"Tips",link:`tips`,image:""
  },{
    name:"Register",link:`register`,image:""
  },{
    name:"Stuff",link:`stuff`,image:""
  },{
    name:"Look",link:`look`,image:""
  }]
  constructor(
    private inventoryService:InventoryService,
    private authService:AuthService,
    private roleService:RoleService
  ){}
  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(async (data)=>{
      this.user= await data.name;
      //this.userId= await data.userId;
    })
  }

}
