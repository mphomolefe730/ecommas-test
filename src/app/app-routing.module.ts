import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sellerGuard } from './auth/seller.guard';

const routes: Routes = [
  {
    path: 'shopping-catalogue',
    loadChildren: ()=> import('./shopping-catalogue/shopping-catalogue.module').then(m => m.ShoppingCatalogueModule)
  },{
    path: 'seller',
    loadChildren: ()=> import('./seller-portal/seller-portal.module').then(m=>m.SellerPortalModule),
    canActivate: [sellerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
