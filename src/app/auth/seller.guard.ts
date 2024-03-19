import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { RoleService } from '../services/role.service';

export const sellerGuard: CanActivateFn = (route, state) => {
  let authService:AuthService = inject(AuthService);
  let router:Router = inject(Router);
  let roleService:RoleService = inject(RoleService);

  if (authService.isLoggedIn() == null) {
    router.navigate(['/sign-in']);
    return false;
  }
  authService.loggedInUser.subscribe((userInformation)=>{
    const userRole:any = roleService.role.filter((a)=> a._id == userInformation.role);
    if (userRole.role == "seller") {
      return true;
    }
    router.navigate(['/']);
    return false;
  })
  return false
};
