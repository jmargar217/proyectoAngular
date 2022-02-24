import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CocheDTO } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FicheroService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }



  subirArchivo(fichero:FormData, coche:CocheDTO){
    let token= localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    const params = new  HttpParams()
    .set("marca",coche.marca)
    .set("modelo",coche.modelo)
    .set("motor",coche.motor)
    .set('precioFijo',coche.precioFijo)
    .set("year",coche.year);
    const url = `${this.baseUrl}/upload`;

    return this.http.post(url,fichero,{headers:headers,params});
  }
}
