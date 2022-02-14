import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlquilerService } from '../../services/alquiler.service';
import { Alquiler } from '../../interfaces/interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit, OnDestroy {

  alquileres:Alquiler[] = [];


  constructor(private alquilerService:AlquilerService) { }

  ngOnInit(): void {
    this.getAlquileres();

  }

  ngOnDestroy(): void {

  }

  getAlquileres(){
    this.alquilerService.getListaAlquiler().subscribe(resp=>{
      this.alquileres=resp;
      console.log(resp);

    })
  }

}
