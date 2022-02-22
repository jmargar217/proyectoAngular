
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    const formData = new FormData();
    formData.append('file', this.myForm.value);
    const fichero = this.myForm.value;

    this.fileService.subirArchivo(fichero).subscribe(resp=>{
      console.log(resp);
    })

  }

}
