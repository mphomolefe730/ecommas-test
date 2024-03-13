import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCatalogueRoutingModule } from './shopping-catalogue-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';


@NgModule({
  declarations: [
    HomeComponent,
    SignupLoginComponent
  ],
  imports: [
    CommonModule,
    ShoppingCatalogueRoutingModule
  ]
})
export class ShoppingCatalogueModule { }
