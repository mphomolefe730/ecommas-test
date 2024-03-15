import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InsightsComponent } from './insights/insights.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:"full"
      },
      {
        path:'home',
        component:InsightsComponent
      },
      {
        path:'orders',
        component:OrdersComponent
      },
      {
        path:'products',
        component:ProductsComponent,
      },{
        path:'products/edit/:id',
        component:EditProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerPortalRoutingModule { }