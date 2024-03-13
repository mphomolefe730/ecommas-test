import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerPortalRoutingModule } from './seller-portal-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { InsightsComponent } from './insights/insights.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    HomepageComponent,
    InsightsComponent,
    OrdersComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SellerPortalRoutingModule
  ]
})
export class SellerPortalModule { }
