import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  {
    path:'',
    component:AccountHomeComponent,
  },{
    path: 'details',
    component: AccountDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
