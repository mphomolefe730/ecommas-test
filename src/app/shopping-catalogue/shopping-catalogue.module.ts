import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCatalogueRoutingModule } from './shopping-catalogue-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShoppingCatalogueRoutingModule
  ]
})
export class ShoppingCatalogueModule { }
