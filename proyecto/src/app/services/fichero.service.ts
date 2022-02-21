import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FileDTO } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FicheroService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }



  subirArchivo(fichero:FileDTO){

    const params = new  HttpParams()
    .set("file",fichero.fileSource);

    console.log(fichero.fileSource);
    const url = `${this.baseUrl}/upload`;
    return this.http.post(url,{params});
  }
}
