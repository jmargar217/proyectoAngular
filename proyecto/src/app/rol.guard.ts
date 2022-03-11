import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  estado:boolean = false;
  constructor(private router:Router, private servicioLogin:LoginService){}

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree| any {

      return new  Promise((resolve, reject)=>{
        this.servicioLogin.validarRol()
          .subscribe({
            next:(resp=>{
              if(resp.rol=="ADMIN"){
                resolve(true);
              }else{
                Swal.fire({
                  title: 'No tiene permisos',
                  icon: 'error',
                  confirmButtonText: 'Ok'
                })
                this.router.navigateByUrl('');
                resolve(false);
              }
            })
          })
      });
  }
}
