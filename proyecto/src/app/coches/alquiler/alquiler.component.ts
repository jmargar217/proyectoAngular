import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Accesorio, AlquilerDTO, Coche } from 'src/app/interfaces/interface';
import { AlquilerService } from 'src/app/services/alquiler.service';
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
    numDias:[, ],
    tarjeta:['']
  });

  alquiler={
    numDias:0,
    tarjeta:'',
  }

  mostrar:boolean = false;
  constructor(private rutaActiva: ActivatedRoute,
    private servicioCoche:CochesService,
    private fb: FormBuilder,
    private servicioAlquiler:AlquilerService,
    private router:Router) { }

  ngOnInit(): void {
    this.formulario.reset({
      numDias:0,
      tarjeta:'',
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

  crearAlquiler(){
    let accesoriosChecked:Accesorio[] = this.servicioAlquiler.accesoriosMarcados(this.accesorios)
    let alquiler:AlquilerDTO = {
      idUser: localStorage.getItem("idUser")!,
      coche:this.coche.id,
      numDias:this.alquiler.numDias,
      accesorios:accesoriosChecked
    }
    this.servicioAlquiler.crearAlquiler(alquiler).subscribe(resp=>{
      this.router.navigateByUrl('listaAlquiler');
    });
  }
}
