import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCatalogueRoutingModule } from './shopping-catalogue-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { RecommandationsComponent } from './recommandations/recommandations.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    SignupLoginComponent,
    ViewProductComponent,
    RecommandationsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCatalogueRoutingModule,
    ReactiveFormsModule
  ]
})
export class ShoppingCatalogueModule { }
