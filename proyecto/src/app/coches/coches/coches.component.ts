import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Coche } from 'src/app/interfaces/interface';
import { CochesService } from 'src/app/services/coches.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit,OnDestroy {
  coches:Coche[]=[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private serviceCoches:CochesService) { }

  ngOnInit(): void {
    this.getCoches();

    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength:5
      };

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  /**
   * Obtiene la lista de coches a través del servicio
   */
  getCoches(){
    this.serviceCoches.getCoches().subscribe(resp =>{
      this.coches = resp;
      this.dtTrigger.next(resp);

    })
  }
}
