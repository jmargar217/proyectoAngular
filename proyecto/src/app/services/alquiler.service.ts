import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Accesorio, Alquiler, AlquilerDTO } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getPrecio(){
  }

  crearAlquiler(alquiler:AlquilerDTO){
    const url = `${this.baseUrl}/alquiler`;
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.http.post<Alquiler>(url,alquiler,{headers:opcionHeader});

  }

  accesoriosMarcados(accesorios:Accesorio[]){
    let aux:Accesorio[] = [];
    for(let i=0; i<accesorios.length;i++){
      if(accesorios[i].checked){
        aux.push(accesorios[i]);
      }
    }
    return aux;
  }


}
