import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlquilerService } from '../../services/alquiler.service';
import { Alquiler } from '../../interfaces/interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit, OnDestroy {

  alquileres:Alquiler[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private alquilerService:AlquilerService) { }

  ngOnInit(): void {
    this.getAlquileres();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:5
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  getAlquileres(){
    this.alquilerService.getListaAlquiler().subscribe(resp=>{
      this.alquileres=resp;
      this.dtTrigger.next(resp);

    })
  }

  borrar(){


  }

}
