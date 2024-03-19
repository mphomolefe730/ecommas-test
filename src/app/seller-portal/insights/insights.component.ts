import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { inventoryModel } from 'src/app/models/inventoryModel';
import { productModel } from 'src/app/models/productModel';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit{
  user:string='';
  userId:string='';
  chart:any;
  unfurfilled:number=0;
  complete:number=0;
  declined:number=0;
  pending:number=0;
  
  barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
  ];

  statuses=["UNFURFILLED", "COMPLETE", "DECLINED", "PENDING"];
  
  constructor(
    private inventoryService:InventoryService,
    private authService:AuthService,
    private roleService:RoleService
  ){}
  
  ngOnInit(): void {
    console.log('insight started');
    this.authService.loggedInUser.subscribe((data)=>{
      this.user=data.name;
      this.userId=data.UserId;
    })
    this.authService.loggedInUser.subscribe((userInformation)=>{
      const userRole:any = this.roleService.role.filter((a)=> a._id == userInformation.role);
      if (userRole.role == "seller") {
        this.inventoryService.getAllSellerOrders(this.userId).subscribe((data)=>{
          let product:any= data;
          product.forEach((product:inventoryModel)=>{
            switch(product.status){
              case "UNFURFILLED": {
                this.unfurfilled+=1;
                console.log(this.unfurfilled);
                break;
              }
              case "PENDING": {
                this.pending+=1;
                console.log(this.pending);
                break;
              }
              case "DECLINED": {
                this.declined+=1;
                console.log(this.declined);
                break;
              }
              default:{
                this.complete+=1;
                console.log(this.complete);
              }
            }
          })
          this.chart = new Chart('canvas', {
            type: 'doughnut',
            data: {
              labels: this.statuses,
              datasets: [
                {
                  data: [this.unfurfilled, this.complete, this.declined, this.pending],
                  backgroundColor:this.barColors,
                  borderWidth: 1,
                },
              ],
            },
            options: {
            },
          });
        });
      }
    })
  }
  
}
