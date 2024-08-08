import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { BusinessRegistrationComponent } from './business-registration/business-registration.component';
import { BusinessTipsComponent } from './business-tips/business-tips.component';

const routes: Routes = [
  {
    path:'',
    component: BusinessHomeComponent,
    children:[{
      path: '',
      redirectTo: 'tips',
      pathMatch:'full'
    },{
      path: 'tips',
      component: BusinessTipsComponent
    },{
      path: 'register',
      component: BusinessRegistrationComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
