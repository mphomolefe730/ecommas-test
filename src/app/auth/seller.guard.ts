import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const sellerGuard: CanActivateFn = (route, state) => {
  let authService:AuthService = inject(AuthService);
  let router:Router = inject(Router);
  let isLoggedIn = authService.isLoggedIn();
  let userRole:boolean = authService.isSeller;

  if (isLoggedIn == null || isLoggedIn == false) {
    router.navigate(['/sign-in']);
    return false;
  }
  if (userRole){
    return true;
  }
  router.navigate(['/sign-in']);
  return false;
};
