import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import { AccessService } from './control-access/access.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private servicio:AccessService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree| any {

    return this.servicio.validarToken()
    .pipe(
        map( resp => {
          console.log(resp);

          return true
        }),
        catchError( err => {
            console.log(err);
            Swal.fire('Error',err.error.message,'error');

            this.router.navigateByUrl('/auth/login');
            return of(false)
        })
      )
  }

}
