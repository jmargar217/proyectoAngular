import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  estado:boolean = false;
  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree| any {

    let rol = localStorage.getItem("rol");
    if(rol == "ADMIN"){
      this.estado=true;
    }else{
      this.estado=false;
      Swal.fire({
        title: 'No tiene permiso de administrador',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      this.router.navigateByUrl('');
    }
    return this.estado;
  }

}
