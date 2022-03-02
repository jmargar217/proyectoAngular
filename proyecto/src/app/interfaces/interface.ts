import { Byte } from "@angular/compiler/src/util";

/**
 * Respuesta despuer de loguearse o registrarse
 */
export interface AuthResponse{
  access_token: string,
  rol:string,
  idUser:string

}

/**
 * Usuario logueado
 */
export interface Usuario{
  email:string;
  password:string;
}

/**
 * Usuario registrado
 */
export interface UsuarioRegister{
    email:string;
    password:string;
    nombre:string;
    apellidos:string;
    rol:string
}

export interface ErrorResponse{
  status: number;
  message: string;
}


export interface Coche{
  id:number,
  marca:string,
  modelo:string,
  motor:string,
  year:number,
  precioFijo:number,
  imagen:Byte[],
  status:boolean
}

export interface Accesorio{
  id:number,
  nombre:string,
  precio:number,
  checked:boolean
}

export interface Alquiler{
  id:number,
  numDias:number,
  coche:Coche,
  precio:number,
  fecha:Date,
  fechaEntrega:Date,
  accesorios:Accesorio[]

}

/**
 * Datos que se van a enviar al crear alquiler
 */
export interface AlquilerDTO{
  idUser:string,
  coche:number,
  numDias:number,
  fecha:string,
  accesorios:Accesorio[]

}

export interface FileDTO{
  file:string,
  fileSource:string,
  name:string
}

export interface CocheDTO{
  marca:string,
  modelo:string,
  motor:string,
  precioFijo:number,
  year:string

}

export interface userDetails{
  idUser:string,
  rol:string
}

export interface Mensaje{
  nombre:string,
  apellidos:string,
  email:string,
  comentario:string

}
