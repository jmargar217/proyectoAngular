import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mensaje } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  enviarMensaje(mensaje:Mensaje){
    const url = `${this.baseUrl}/mensaje`;
    return this.http.post(url,mensaje);
  }
}
