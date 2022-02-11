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

  formulario: FormGroup = this.fb.group({
    numDias:[0, [Validators.required]],
    tarjeta:['',[Validators.minLength(5),Validators.required]],
    accesorios:['',[Validators.pattern(/^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/)]]

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
