import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/interfaces/interface';
import { CochesService } from 'src/app/services/coches.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  coches:Coche[]=[];
  dtOptions: DataTables.Settings = {};


  constructor(private serviceCoches:CochesService) { }

  ngOnInit(): void {
    this.getCoches();

    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength:5
      };

  }

  /**
   * Obtiene la lista de coches a través del servicio
   */
  getCoches(){
    this.serviceCoches.getCoches().subscribe(resp =>{
      this.coches = resp;

    })
  }
}
