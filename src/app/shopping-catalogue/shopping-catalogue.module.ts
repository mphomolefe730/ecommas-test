import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCatalogueRoutingModule } from './shopping-catalogue-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecommandationsComponent } from './recommandations/recommandations.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViewProductComponent,
    RecommandationsComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ShoppingCatalogueRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ShoppingCatalogueModule { }
