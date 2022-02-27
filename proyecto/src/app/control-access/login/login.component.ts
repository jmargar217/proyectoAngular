import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interface';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * Formulario con las validaciones del login
   */
  formulario:FormGroup=this.fb.group({
    email:! ['',[Validators.required,Validators.email]],
    password:!['',[Validators.required,Validators.minLength(4)]],
  });

  /**
   * Objeto usuario que se a a enviar al servicio
   */
  usuario: Usuario={
    email:'',
    password:''
  }
  constructor(private fb: FormBuilder,private serviceLogin:LoginService, private router: Router, ) { }

  ngOnInit(): void {
  }

  /**
   * Envia los datos validades del formulario en forma de objeto usuario al servicio y de validarse en el
   * backend devuelve su token,id y rol. Almacenando la respuesta en el localStorage y mandandonos a
   * la pagina listado de coches disponibles
   */
  login(){
    this.serviceLogin.login(this.usuario.email,this.usuario.password)
    .subscribe({
      next: (resp =>{
        localStorage.setItem('token',resp.access_token);
        localStorage.setItem('idUser',resp.idUser);
        localStorage.setItem('rol',resp.rol);
        this.router.navigateByUrl('coches').then(resp=>{
          window.location.reload();
        });
      }),
      error: resp =>{
        Swal.fire({
          title: 'Sus datos no son correctos',
          text: 'Vuelva a intentarlo',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    })
  }
}
