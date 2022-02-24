import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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
  imagen!:string;
  accesorios:Accesorio[] = [];
  precio:Number = 0;
  mostrarPrecio:boolean = false;

  fechaActual = new Date().toJSON().slice(0,19);
  //Todos los números de tarjeta Visa comienzan con el número 4.
  //Las tarjetas nuevas tienen 16 dígitos. Las tarjetas viejas tienen 13.

  formulario: FormGroup = this.fb.group({
    numDias:[, ],
    fecha:[,],
    tarjeta:['']
  });

  alquiler={
    numDias:0,
    fecha: this.fechaActual,
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
    this.servicioCoche.getCochesById(this.rutaActiva.snapshot.params["id"])
    .subscribe({
      next: (resp =>{
        this.coche = resp;
        this.imagen=this.servicioCoche.obtenerImagen(this.coche);
        this.mostrar = true;
      })
    })
  }

  getAccesorios(){
    this.servicioCoche.getAccesorios()
    .subscribe({
      next: (resp =>{
        this.accesorios=resp;
      })
    })
  }

  crearAlquiler(){
    let accesoriosChecked:Accesorio[] = this.servicioAlquiler.accesoriosMarcados(this.accesorios)
    let alquiler:AlquilerDTO = {
      idUser: localStorage.getItem("idUser")!,
      coche:this.coche.id,
      numDias:this.alquiler.numDias,
      fecha:this.alquiler.fecha,
      accesorios:accesoriosChecked
    }
    this.servicioAlquiler.crearAlquiler(alquiler).subscribe(resp=>{
      this.router.navigateByUrl('listaAlquiler');
    });
  }

  calcularPrecio(){
    let accesoriosChecked:Accesorio[] = this.servicioAlquiler.accesoriosMarcados(this.accesorios)
    let alquiler:AlquilerDTO = {
      idUser: localStorage.getItem("idUser")!,
      coche:this.coche.id,
      numDias:this.alquiler.numDias,
      fecha:this.alquiler.fecha,
      accesorios:accesoriosChecked
    }
    this.servicioAlquiler.calcularPrecio(alquiler).subscribe(resp=>{
      this.precio=resp;
      this.mostrarPrecio=true;
    });

  }
}
