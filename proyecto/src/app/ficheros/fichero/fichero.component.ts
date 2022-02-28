
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FicheroService } from '../../services/fichero.service';

@Component({
  selector: 'app-fichero',
  templateUrl: './fichero.component.html',
  styleUrls: ['./fichero.component.css']
})
export class FicheroComponent implements OnInit {

  constructor(private fileService:FicheroService,private router:Router) { }

  ngOnInit(): void {
  }

  /**
   * Datos del formulario para añadir un coche
   */
  myForm = new FormGroup({
    marca: new FormControl('',[Validators.required]),
    modelo: new FormControl('',[Validators.required]),
    motor:new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required, Validators.pattern('^([0-9]{4})$')]),
    precioFijo:new FormControl('',[Validators.required, Validators.pattern('^([1-9]\d*(\.\d*[1-9][0-9])?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$')]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])

  });


  onFileChange(event:any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
  /**
   * Comprueba el estado de los campos del formulario una vez han sido introducido datos o pasado por encima.
   * @param campo que ha activado el error
   * @returns  mensaje de error
   */
  campoEsValido( campo: string ) {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  }

  /**
   * Envia el fichero y los datos del coche que se va a añadir, si se envia correctamente devuelve un mensaje
   * descriptivo y nos manda a la pagina de listado de coches disponibles
   */
  submit(){

    const coche = {
      marca: this.myForm.get('marca')?.value,
      modelo: this.myForm.get('modelo')?.value,
      motor: this.myForm.get('motor')?.value,
      year: this.myForm.get('year')?.value,
      precioFijo: this.myForm.get('precioFijo')?.value
    }

    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')!.value);

    this.fileService.subirArchivo(formData, coche).subscribe({
      next: (resp=>{
        Swal.fire({
          title: "Coche guardado",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigateByUrl('coches');
      }),
      error: resp=>{
        Swal.fire({
          title: 'Excede el limite de 500 KB',
          text: 'Indique una imagen válida',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      })


  }

}
