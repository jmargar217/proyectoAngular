import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { UsuarioRegister } from '../../interfaces/interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup = this.fb.group({
    email:['', [Validators.email,Validators.required]],
    password:['',[Validators.minLength(5),Validators.required]],
    nombre:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)]],
    apellidos:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)]]
  });

  constructor(private fb: FormBuilder,private serviceLogin:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.formulario.reset({
      email:'',
      passowrd:'',
      nombre:'',
      apellidos:''
    })
  }

  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  guardar(){

    const user = this.formulario.value;
    this.serviceLogin.registrar(user).
    subscribe({
      next: (resp=>{
        console.log(resp);
        localStorage.setItem('token',resp.access_token!)

        this.serviceLogin.getUsuario();
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
