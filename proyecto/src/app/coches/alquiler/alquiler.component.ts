import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Accesorio, Coche } from 'src/app/interfaces/interface';
import { CochesService } from 'src/app/services/coches.service';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
  coche!:Coche;
  accesorios:Accesorio[] = [];


  //Todos los números de tarjeta Visa comienzan con el número 4.
  //Las tarjetas nuevas tienen 16 dígitos. Las tarjetas viejas tienen 13.

  formulario: FormGroup = this.fb.group({
    numDias:[, [Validators.required, Validators.minLength(1),Validators.pattern(/^([1-9]\d*(\.\d*[1-9][0-9])?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$/)]],
    tarjeta:['',[Validators.required,Validators.pattern('^4[0-9]{12}(?:[0-9]{3})?$')]], //Visa (16 dígitos empieza por 4 )
    accesorios:['',[Validators.required]]

  });

  mostrar:boolean = false;
  constructor(private rutaActiva: ActivatedRoute,
    private servicioCoche:CochesService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario.reset({
      numDias:0,
      tarjeta:'',
      accesorios:''
    })
    this.getCoche();
    this.getAccesorios();
  }

  getCoche(){
    this.servicioCoche.getCochesById(this.rutaActiva.snapshot.params["id"]).subscribe(resp =>{
      this.coche = resp;
      this.mostrar = true;
    })

  }

  getAccesorios(){
    this.servicioCoche.getAccesorios().subscribe(resp=>{
      this.accesorios=resp;
    })
  }

  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors && this.formulario.controls[campo].touched;
  }

  crearAlquiler(){


  }

}
