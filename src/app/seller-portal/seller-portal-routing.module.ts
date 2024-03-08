import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InsightsComponent } from './insights/insights.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    children:[
      {
        path:'',
        component:InsightsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerPortalRoutingModule { }
