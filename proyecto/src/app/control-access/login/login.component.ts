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

  formulario:FormGroup=this.fb.group({
    email:! ['',[Validators.required,Validators.email]],
    password:!['',[Validators.required,Validators.minLength(4)]],
  });


  usuario: Usuario={
    email:'',
    password:''
  }
  constructor(private fb: FormBuilder,private serviceLogin:LoginService, private router: Router, ) { }

  ngOnInit(): void {
  }

  login(){

    this.serviceLogin.login(this.usuario.email,this.usuario.password)
    .subscribe({
      next: (resp =>{
        localStorage.setItem('token',resp.access_token);
        localStorage.setItem('idUser',resp.idUser);
        localStorage.setItem('rol',resp.rol);
        //this.serviceLogin.getUsuario();
        this.router.navigateByUrl('coches');
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
