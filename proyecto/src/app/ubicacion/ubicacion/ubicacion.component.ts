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
  /**
   * Formulario con los datos y validaciones para enviar un comentario
   */
  formulario: FormGroup = this.fb.group({
    email:['', [Validators.email,Validators.required,Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')]],
    nombre:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/), Validators.required]],
    apellidos:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/),Validators.required]],
    comentario:['',[Validators.minLength(10),Validators.maxLength(500), Validators.required]]
  });


  constructor(private fb: FormBuilder,private router:Router) { }

  /**
   * Reseta los valores del formulario al cargar el componente
   */
  ngOnInit(): void {
    this.formulario.reset({
      email:'',
      nombre:'',
      apellidos:'',
      comentario:''
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
   * Muestra una alerta al validar y enviar el comentario
   */
  enviar(){
    Swal.fire({
      title: 'Su consulta ha sido enviada',
      text: 'Intentaremos responder lo antes posible',
      icon: 'success',
      confirmButtonText: 'Ok'
    })

  }
}
