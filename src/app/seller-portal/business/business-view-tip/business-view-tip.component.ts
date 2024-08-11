import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { businessTip } from 'src/app/models/businessTipModel';
import { BusinessManagerService } from 'src/app/services/business-manager.service';

@Component({
  selector: 'app-business-view-tip',
  templateUrl: './business-view-tip.component.html',
  styleUrls: ['./business-view-tip.component.scss']
})
export class BusinessViewTipComponent implements OnInit{
  tip:businessTip={
    title: '',
    description: '',
    link: '',
    ratings: 0,
    comments: [],
    createdAt: ""
  };

  constructor(
    private activeRouter:ActivatedRoute,
    private businessServiceManager:BusinessManagerService
  ){}
  ngOnInit(): void {
  
    this.activeRouter.params.subscribe((data:any)=>{
      this.businessServiceManager.getBusinessTipById(data.id).subscribe({
        next:async (object:any)=>{
          if(object.status=="success"){
            this.tip = await object.object[0];
            console.log(object.object[0])
          }
          if(object.status=="error"){};
        },
        error:(err)=>{
          console.log(err);
        }
      })   
    }) 
  }
}
