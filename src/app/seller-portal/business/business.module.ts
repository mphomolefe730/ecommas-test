import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { BusinessRegistrationComponent } from './business-registration/business-registration.component';
import { BusinessTipsComponent } from './business-tips/business-tips.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusinessHomeComponent,
    BusinessRegistrationComponent,
    BusinessTipsComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class BusinessModule { }
