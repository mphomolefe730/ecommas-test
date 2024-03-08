import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerPortalRoutingModule } from './seller-portal-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { InsightsComponent } from './insights/insights.component';


@NgModule({
  declarations: [
    HomepageComponent,
    InsightsComponent
  ],
  imports: [
    CommonModule,
    SellerPortalRoutingModule
  ]
})
export class SellerPortalModule { }
