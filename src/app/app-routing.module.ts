import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sellerGuard } from './auth/seller.guard';
import { userGuard } from './auth/user.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./shopping-catalogue/shopping-catalogue.module').then(m => m.ShoppingCatalogueModule)
  },{
    path: 'seller',
    loadChildren: ()=> import('./seller-portal/seller-portal.module').then(m=>m.SellerPortalModule),
    canActivate: [sellerGuard]
  },
  {
    path: 'account',
    loadChildren: ()=> import('./account/account.module').then(m=>m.AccountModule),
    canActivate: [userGuard]
  },{
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
