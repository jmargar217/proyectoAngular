export interface AuthResponse{
  access_token: string;

}

export interface ErrorResponse{
  status: number;
  message: string;
}

export interface Coche{
  id:number,
  marca:string,
  modelo:string,
  year:number,
  status:string,
  precioFijo:number

}
