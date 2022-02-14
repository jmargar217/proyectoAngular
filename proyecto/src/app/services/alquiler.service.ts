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

  getListaAlquiler(){
    let token= localStorage.getItem('token');
    let id = localStorage.getItem('idUser');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const options = {
      headers: headers
    }

    const url = `${this.baseUrl}/alquiler/${id}`;
    console.log(url);
    return this.http.get<Alquiler[]>(url,options);
  }

  crearAlquiler(alquiler:AlquilerDTO){
    let token  = localStorage.getItem('token');
    const url = `${this.baseUrl}/alquiler`;

    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    opcionHeader.append('Authorization',`Bearer ${token}`);

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
