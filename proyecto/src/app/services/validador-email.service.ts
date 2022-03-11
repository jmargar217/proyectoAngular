import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ValidadorEmailService implements AsyncValidator {

  private ruta:string=environment.baseUrl;


  constructor(private httpClient: HttpClient) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    let email = control.value;
    return this.comprobarEmail(email).pipe(
      map (resp => {
        if(resp.email != null){
           return {emailenuso: true};
        }else{
         return null;
        }
      }),
      catchError (err => {
         return of(null);
      })
    );
  }

  comprobarEmail(email:string){
    const url = `${this.ruta}/user/${email}`;
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('Access-Control-Allow-Origin','*');
    return this.httpClient.get<Usuario>(url,{headers :httpHeaders});
  }
}
