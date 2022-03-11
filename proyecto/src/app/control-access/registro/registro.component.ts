import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { ValidadorEmailService } from '../../services/validador-email.service';

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
    email:['', [Validators.email,Validators.required,Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')],[ this.validarEmail]],
    password:['',[Validators.minLength(5),Validators.required]],
    nombre:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/),Validators.required]],
    apellidos:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/),Validators.required]]
  });

  constructor(private fb: FormBuilder,private serviceLogin:LoginService,
    private router:Router,
    private validarEmail:ValidadorEmailService) { }

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

  get mensajesErrores() {
    const errors = this.formulario.get('email')?.errors!;
    if ( errors['required'] ) {
      return 'El campo email es obligatorio';
    } else if ( errors['pattern'] ) {
      return 'El dato introducido es incorrecto';
    } else if ( errors['emailenuso'] ) {
      return 'Este email ya fue registrado por otro usuario';
    }
    return '';
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
        this.router.navigateByUrl('coches');
      }),
      error: (err) =>{
        Swal.fire({
          title: 'Error',
          text: `${err.error.mensaje}`,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }

}
