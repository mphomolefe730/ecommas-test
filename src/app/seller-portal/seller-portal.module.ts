import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerPortalRoutingModule } from './seller-portal-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { InsightsComponent } from './insights/insights.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerDesktopNavComponent } from '../core/seller-desktop-nav/seller-desktop-nav.component';
import { UploadProductComponent } from './upload-product/upload-product.component';

@NgModule({
  declarations: [
    HomepageComponent,
    InsightsComponent,
    OrdersComponent,
    ProductsComponent,
    EditProductComponent,
    SellerDesktopNavComponent,
    UploadProductComponent
  ],
  imports: [
    CommonModule,
    SellerPortalRoutingModule,
    ReactiveFormsModule
  ]
})
export class SellerPortalModule { }
