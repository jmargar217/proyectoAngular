import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FicheroService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }



  subirArchivo(fichero:FormData, coche:any){

    const params = new  HttpParams()
    .set("marca",coche.marca)
    .set("modelo",coche.modelo)
    .set("motor",coche.motor)
    .set('precioFijo',coche.precioFijo)
    .set("year",coche.year);

    console.log(params);
    const url = `${this.baseUrl}/upload`;
    return this.http.post(url,fichero,{params});
  }
}
