import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn:"root"})
class ValidateUser {
  canActivate(): boolean {
    return true;
  }

}

export const CanActivateValidateUser: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(ValidateUser).canActivate();
};

