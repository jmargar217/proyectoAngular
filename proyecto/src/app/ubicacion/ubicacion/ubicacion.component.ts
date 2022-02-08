import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  formulario: FormGroup = this.fb.group({
    email:['', [Validators.email,Validators.required]],
    nombre:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)]],
    apellidos:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)]],
    comentario:['',[Validators.minLength(10),Validators.maxLength(500)]]
  });


  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.formulario.reset({
      email:'',
      nombre:'',
      apellidos:'',
      comentario:''
    })
  }

  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }


  enviar(){
    Swal.fire({
      title: 'Su consulta ha sido enviada',
      text: 'Intentaremos responder lo antes posible',
      icon: 'success',
      confirmButtonText: 'Ok'
    })

  }
}
