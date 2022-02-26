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

  /**
   * Peticion GET a la api para obtener la lista de alquileres de un usuario. En la cabecera
   * pasamos el token del usuario y en como parametro su id, ambos los obtenemos del localSotrage.
   * @returns observable de tipo lista alquiler
   */
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

  /**
   * Peticion POST a la api para crear un alquiler apartir de un objeto AlquilerDTO creado en el formulario.
   * @param alquiler
   * @returns  observable de tipo alquiler
   */
  crearAlquiler(alquiler:AlquilerDTO){
    let token  = localStorage.getItem('token');
    const url = `${this.baseUrl}/alquiler`;

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization',`Bearer ${token}`);
    return this.http.post<Alquiler>(url,alquiler,{headers:headers});
  }

  /**
   * Obtiene una lista de accesorios que han sido marcados en la vista
   * @param accesorios
   * @returns  accesorios marcados
   */
  accesoriosMarcados(accesorios:Accesorio[]){
    let aux:Accesorio[] = [];
    for(let i=0; i<accesorios.length;i++){
      if(accesorios[i].checked){
        aux.push(accesorios[i]);
      }
    }
    return aux;
  }

  /**
   * Peticion DELETE a la api para borrar un alquiler a través de su id que pasamos en el path
   * @param id
   * @returns
   */
  borrarAlquiler(id:number){
    let token= localStorage.getItem('token');

    const opcionHeader = new HttpHeaders()
    .set('Authorization',`Bearer ${token}`);
    const url = `${this.baseUrl}/alquiler/${id}`;

    return this.http.delete(url,{headers:opcionHeader});
  }

  /**
   * Calcula el precio de un alquiler con una llamada a la api donde le pasamos el alquilerDTO que hemos creado
   * con el formulario en la vista.
   * @param alquiler
   * @returns precio
   */
  calcularPrecio(alquiler:AlquilerDTO){
    let token  = localStorage.getItem('token');
    const url = `${this.baseUrl}/calcular-alquiler`;

    const opcionHeader = new HttpHeaders()
    .set('Authorization',`Bearer ${token}`);
    return this.http.post<Number>(url,alquiler,{headers:opcionHeader});
  }
}
