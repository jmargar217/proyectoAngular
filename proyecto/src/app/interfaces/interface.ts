export interface AuthResponse{
  access_token: string;

}

export interface Usuario{
  email:string;
  password:string;
}

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
  imagen:string,
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
  accesorios:Accesorio[]

}

export interface AlquilerDTO{
  idUser:string,
  coche:number,
  numDias:number,
  accesorios:Accesorio[]

}
