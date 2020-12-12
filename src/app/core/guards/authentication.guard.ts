import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }
  canActivate(): boolean {

    if (this.auth.estaAutenticado()) {
      return true;
    } else {
      this.router.navigate(['welcome']);
      return false;

    }
    // }
    // canActivateChild(
    //   childRoute: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
  }

}
