import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCatalogueRoutingModule } from './shopping-catalogue-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    HomeComponent,
    SignupLoginComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ShoppingCatalogueRoutingModule
  ]
})
export class ShoppingCatalogueModule { }
