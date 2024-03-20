import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCatalogueRoutingModule } from './shopping-catalogue-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ShoppingCatalogueModule { }
