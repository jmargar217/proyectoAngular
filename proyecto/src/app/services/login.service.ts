
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


  /**
   * Peticion POST a la api para loguearse, se envia el email y la contraseña
   * @param email
   * @param password
   * @returns observable del tipo AuthResponse que contiene el token,id y rol del usuario
   */
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

  /**
   * Obtiene el id del usuario que se encuentra logueado
   */
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

  /**
   * Envia los datos del formulario de registrado
   * @param usuario
   * @returns
   */
  registrar(usuario:UsuarioRegister){
    const url = `${this.baseUrl}/auth/register`;
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.http.post<AuthResponse>(url,usuario,{headers:opcionHeader});

  }

  /**
   * Comprueba que el token es válido lanzando una peticion a una URI en la cual sino tiene acceso es que
   * no es válido el token
   * @returns
   */
  validarToken():Observable<AuthResponse>{
    const url = `${ this.baseUrl }/accesorios`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '' );

    return this.http.get<AuthResponse>( url, { headers } )
  }

  validarRol():Observable<UsuarioRegister>{
    let token  = localStorage.getItem('token');
    const url = `${ this.baseUrl }/user`;

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization',`Bearer ${token}`);
    return this.http.get<UsuarioRegister>(url,{headers:headers});
  }
}
