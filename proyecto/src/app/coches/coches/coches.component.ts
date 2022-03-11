import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Coche } from 'src/app/interfaces/interface';
import { CochesService } from 'src/app/services/coches.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit,OnDestroy {
  coches:Coche[]=[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  constructor(private serviceCoches:CochesService,
    private router:Router) { }

  /**
   * Carga la lista de coches del backend al cargar el componente
   */
  ngOnInit(): void {
    this.getCoches();

    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength:5,
        lengthMenu: [5,10,20],
        responsive:true,
        language: {
          url: 'http://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json'
        }
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
      if(this.coches.length==0){

        Swal.fire({
          title: 'No hay coches disponibles',
          icon: 'error',
          confirmButtonText: 'Ok'
        })

        this.router.navigateByUrl('');

      }else{
        this.dtTrigger.next(null);
      }
    })
  }
}
