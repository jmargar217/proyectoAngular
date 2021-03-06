import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private servicio:LoginService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree| any {

    return this.servicio.validarToken()
    .pipe(
        map( resp => {

          return true
        }),
        catchError( err => {
            Swal.fire({
              title: 'Su token ha expirado',
              text: 'Inicie sesión',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
            this.router.navigateByUrl('/login');
            return of(false)
        })
      )
  }

}
