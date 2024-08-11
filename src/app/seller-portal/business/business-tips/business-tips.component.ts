import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { businessTipSummay } from 'src/app/models/businessTipSummaryModel';
import { BusinessManagerService } from 'src/app/services/business-manager.service';

@Component({
  selector: 'app-business-tips',
  templateUrl: './business-tips.component.html',
  styleUrls: ['./business-tips.component.scss']
})
export class BusinessTipsComponent implements OnInit{
  page:number=0;
  summaries:businessTipSummay[]=[];

  constructor(
    private businessServiceManager:BusinessManagerService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.businessServiceManager.getAllBusinessTipSummaries(this.page).subscribe({
      next:(summariesFromDatabase:any)=>{
        summariesFromDatabase.object.forEach((element:businessTipSummay) => {
          this.summaries.unshift(element);
        });
        console.log(summariesFromDatabase.object);
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }
  viewArticle(businessArticleId:string){
    this.router.navigate([`seller/business/tips/${businessArticleId}`])
  };
}
