import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Accesorio, Coche } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CochesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getCoches(){
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const options = {
      headers: headers
    }
    const url = `${this.baseUrl}/coches`;
    return this.http.get<Coche[]>(url,options);

  }

  getCochesById(idCoche:number){
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const options = {
      headers: headers
    }
    const url = `${this.baseUrl}/coche/${idCoche}`;
    return this.http.get<Coche>(url,options);
  }


  getAccesorios(){
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const options = {
      headers: headers
    }
    const url = `${this.baseUrl}/accesorios`;
    return this.http.get<Accesorio[]>(url,options);
  }
}
