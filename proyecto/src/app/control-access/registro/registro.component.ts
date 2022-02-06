import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

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

  constructor(private fb: FormBuilder,private serviceLogin:LoginService) { }

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
    this.serviceLogin.registrar(user).subscribe(resp =>{

      console.log(resp);
    });
  }

}
