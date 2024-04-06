import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  let authService:AuthService = inject(AuthService);
  let router:Router = inject(Router);
  let isLoggedIn = authService.isLoggedIn();
  let userRole:any = authService.isSeller;

  if (!isLoggedIn) {
    router.navigate(['/sign-in']);
    return false;
  }
  // console.log(userRole)
  // if (userRole == false){
  //   router.navigate(['/seller']);
  //   return false;
  // }
  return true;
};
