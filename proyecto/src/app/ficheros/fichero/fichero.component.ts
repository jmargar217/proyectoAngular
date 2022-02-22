
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FicheroService } from '../../services/fichero.service';

@Component({
  selector: 'app-fichero',
  templateUrl: './fichero.component.html',
  styleUrls: ['./fichero.component.css']
})
export class FicheroComponent implements OnInit {

  constructor(private fileService:FicheroService) { }

  ngOnInit(): void {
  }
  myForm = new FormGroup({
    marca: new FormControl('',[Validators.required]),
    modelo: new FormControl('',[Validators.required]),
    motor:new FormControl('',[Validators.required]),
    year: new FormControl('',[Validators.required]),
    precioFijo:new FormControl('',[Validators.required]),
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

  campoEsValido( campo: string ) {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched;
  }

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

    this.fileService.subirArchivo(formData, coche).subscribe(resp=>{
      Swal.fire({
        title: `{{resp}}`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    })

  }

}
