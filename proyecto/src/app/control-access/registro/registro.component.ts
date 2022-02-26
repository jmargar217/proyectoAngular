import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /**
   * Formulario reactivo con las validaciones necesarios para registrar un usuario
   */
  formulario: FormGroup = this.fb.group({
    email:['', [Validators.email,Validators.required]],
    password:['',[Validators.minLength(5),Validators.required]],
    nombre:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)]],
    apellidos:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)]]
  });

  constructor(private fb: FormBuilder,private serviceLogin:LoginService, private router:Router) { }

  /**
   * Reseta los valores del formulario al cargar el componente
   */
  ngOnInit(): void {
    this.formulario.reset({
      email:'',
      passowrd:'',
      nombre:'',
      apellidos:''
    })
  }

  /**
   * Comprueba el estado de los campos del formulario una vez han sido introducido datos o pasado por encima.
   * @param campo que ha activado el error
   * @returns  mensaje de error
   */
  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  /**
   * Envía los datos del formulario y devuelve un token,id y rol del usuario que hemos registrado. Almacena
   * en el localStorage dichos datos y nos manda a la página listado de coches disponibles
   */
  guardar(){

    const user = this.formulario.value;
    this.serviceLogin.registrar(user).
    subscribe({
      next: (resp=>{
        localStorage.setItem('token',resp.access_token);
        localStorage.setItem('idUser',resp.idUser);
        localStorage.setItem('rol',resp.rol);

        //this.serviceLogin.getUsuario();
        this.router.navigateByUrl('coches');
      }),
      error: resp =>{
        Swal.fire({
          title: 'Ya se encuentra el email registrado',
          text: 'Debe indicar un email no registrado',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }

}
