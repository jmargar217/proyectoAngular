
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, UsuarioRegister } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }


  login(email:string,password:string){

    const url = `${this.baseUrl}/auth/login`;
    const body ={
      'email': email,
      'password': password
    }
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');

    return this.http.post<AuthResponse>(url,body,{headers:opcionHeader});
  }

  getUsuario(){
    const url = `${this.baseUrl}/user`;

    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const options = {
      headers: headers
    }
    this.http.get(url,options)
      .subscribe(resp =>{
        localStorage.setItem("idUser",JSON.stringify(resp));
      });
  }

  registrar(usuario:UsuarioRegister){
    const url = `${this.baseUrl}/auth/register`;
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.http.post<AuthResponse>(url,usuario,{headers:opcionHeader});

  }

  validarToken():Observable<AuthResponse>{
    const url = `${ this.baseUrl }/accesorios`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '' );

    return this.http.get<AuthResponse>( url, { headers } )
  }
}
