import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    let id = localStorage.getItem('idUser')!;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const params = new  HttpParams()
    .set("id",id);

    const url = `${this.baseUrl}/alquiler`;
    return this.http.get<Alquiler[]>(url,{headers:headers,params});
  }

  crearAlquiler(alquiler:AlquilerDTO){
    let token  = localStorage.getItem('token');
    const url = `${this.baseUrl}/alquiler`;

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization',`Bearer ${token}`);
    return this.http.post<Alquiler>(url,alquiler,{headers:headers});
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

  borrarAlquiler(id:number){
    let token= localStorage.getItem('token');

    const opcionHeader = new HttpHeaders()
    .set('Authorization',`Bearer ${token}`);
    const url = `${this.baseUrl}/alquiler/${id}`;

    return this.http.delete(url,{headers:opcionHeader});
  }

  calcularPrecio(alquiler:AlquilerDTO){
    let token  = localStorage.getItem('token');
    const url = `${this.baseUrl}/calcular-alquiler`;

    const opcionHeader = new HttpHeaders()
    .set('Authorization',`Bearer ${token}`);
    return this.http.post<Number>(url,alquiler,{headers:opcionHeader});
  }
}
