import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { businessModel } from 'src/app/models/businessModel';
import { AuthService } from 'src/app/services/auth.service';
import { BusinessManagerService } from 'src/app/services/business-manager.service';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})
export class BusinessRegistrationComponent implements OnInit{
  sending:boolean=false;
  progressLoader:string='../../../../assets/icons/loader.gif';
  doesNotExist:boolean=true;
  businessFormWorking:businessModel={
    businessName: '',
    businessDescription: '',
    userId: ''
  };
  businessForm:FormGroup= new FormGroup({
    businessName: new FormControl(this.businessFormWorking.businessName,Validators.required),
    businessDescription: new FormControl(this.businessFormWorking.businessName,Validators.required),
    userId: new FormControl(this.businessFormWorking.userId),
  });

  constructor(
    private businessManagerService:BusinessManagerService,
    private toaster:NgToastService,
    private authService:AuthService
  ){}
  
  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(async (data)=>{
      this.businessFormWorking.userId = await data.userId
      this.businessManagerService.getBusinessBySellerId(this.businessFormWorking.userId).subscribe({
        next:(sellerBusiness:any)=>{
          if (sellerBusiness.message == "success") this.doesNotExist=false;
          console.log(sellerBusiness);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    })
  }
  
  submitBusinessForm(){
    this.sending=true;
    this.businessForm.value.userId = this.businessFormWorking.userId;
    if (this.businessForm.invalid){
      this.sending=false;
      return this.toaster.error({detail:'ERROR',summary: 'Please fill in all the fields'});
    }
    this.businessManagerService.registerABusiness(this.businessForm.value).subscribe({
      next:(data:any)=>{
        this.sending=false;
        this.toaster.success({detail: data.message,summary:"Business successfully registered"})
      },
      error:(err)=>{
        this.sending=false;
        console.log(err);
      }
    })
  }


  get businessName() {
    return this.businessForm.get('businessName');
  }

  get businessDescription() {
    return this.businessForm.get('businessDescription');
  }
}
