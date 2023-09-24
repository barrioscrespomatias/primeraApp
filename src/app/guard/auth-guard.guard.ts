import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AngularFireService } from '../services/angular-fire.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AngularFireService, public router: Router) {}
  
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const logueado = await this.authService.isLoggedIn();
    const user = JSON.stringify(await this.authService.userLoggedIn()) ;

    console.log(user)

    if(logueado)
      return true;
    else
      // this.router.navigate(['']);

    return logueado;
  }
}