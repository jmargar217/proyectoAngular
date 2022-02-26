import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Accesorio, Coche } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CochesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  /**
   * Peticion GET a la api para obtener la lista de coches disponibles
   * @returns  observable de tipo lista coche.
   */
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

  /**
   * Peticion GET a la api para obtener un coche concreto a través de su id
   * @param idCoche
   * @returns observable de tipo coche
   */
  getCochesById(idCoche:number){
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const options = {
      headers: headers
    }
    const url = `${this.baseUrl}/coches/${idCoche}`;
    return this.http.get<Coche>(url,options);
  }

  /**
   * Peticion GET a la api para saber si se dispone de una marca concreta de coche (campo busqueda)
   * @param marca buscada
   * @returns true o false
   */
  getCochesByMarca(marca:string){
    const url = `${this.baseUrl}/buscador`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const params = new  HttpParams()
    .set("marca",marca);

    return this.http.get<boolean>(url,{headers:headers,params});

  }

  /**
   * Peticion GET a la api para obtener la lista de accesorios
   * @returns observable de tipo lista de accesorios
   */
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

  /**
   * Regenera la imagen de un coche (array de bytes) y la devuelve para utilizarla en la vista
   * @param coche
   * @returns imagen
   */
  obtenerImagen(coche:Coche){
    const base64String = btoa(String.fromCharCode(...new Uint8Array(coche.imagen)));
    const source = `data:image/png;base64,${base64String}`+coche.imagen;
    return source;
  }
}
