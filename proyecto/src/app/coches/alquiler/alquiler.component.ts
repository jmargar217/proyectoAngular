import { Component, OnInit } from '@angular/core';
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


  mostrar:boolean = false;
  constructor(private rutaActiva: ActivatedRoute,private servicioCoche:CochesService) { }

  ngOnInit(): void {
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

}
