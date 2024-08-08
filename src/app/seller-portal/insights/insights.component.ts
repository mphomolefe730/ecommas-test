import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { inventoryModel } from 'src/app/models/inventoryModel';
import { orderStatus } from 'src/app/models/orderStatus';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements AfterContentInit{
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
  ngAfterContentInit(): void {
    this.authService.loggedInUser.subscribe(async (data)=>{
      this.user= await data.name;
      this.userId= await data.userId;
    })
    this.authService.loggedInUser.subscribe((userInformation)=>{
      const userRole:any = this.roleService.role.filter((a)=> a._id == userInformation.role);
      if (userRole.role == "seller") {
        this.inventoryService.getAllSellerOrders(this.userId).subscribe((data:any)=>{
          let product:any= data.order;
          product.forEach((product:inventoryModel)=>{
            switch(product.status){
              case "UNFURFILLED": {
                this.unfurfilled+=1;
                break;
              }
              case "PENDING": {
                this.pending+=1;
                break;
              }
              case "DECLINED": {
                this.declined+=1;
                break;
              }
              default:{
                this.complete+=1;
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
