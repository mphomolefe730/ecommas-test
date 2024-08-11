import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { businessModel } from '../models/businessModel';

@Injectable({
  providedIn: 'root'
})
export class BusinessManagerService {

  constructor(
    private http:HttpClient
  ) { }
  registerABusiness(businessInformation:businessModel){
    return this.http.post(`${environment.renderApiLink}/api/business/add`,businessInformation);
  }
  getBusinessBySellerId(businessName:string){
    return this.http.get(`${environment.renderApiLink}/api/business/seller/${businessName}`)
  }
  getAllBusinessTipSummaries(pageNumber:number){
    return this.http.post(`${environment.renderApiLink}/api/businessTips/summary`,{page:pageNumber})
  }
  getBusinessTipById(tipId:string){
    return this.http.get(`${environment.renderApiLink}/api/businessTips/${tipId}`);
  }
}
