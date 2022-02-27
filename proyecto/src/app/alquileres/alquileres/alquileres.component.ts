import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlquilerService } from '../../services/alquiler.service';
import { Alquiler } from '../../interfaces/interface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit, OnDestroy {
  alquileres:Alquiler[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  cochesDefault:boolean=false;

  isEmpty:boolean = true;

  constructor(private alquilerService:AlquilerService, private router:Router) { }

  /**
   * Obtiene la lista de alquileres del usuario logueado al cargar el componente
   */
  ngOnInit(): void {
    this.getAlquileres();
    this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength:5,
    responsive:true
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  /**
   * Obtiene la lista de alquileres del usuario logueado, de no tener alquileres devuelve una alerta y nos
   * manda a la pagina de coches disponibles
   */
  getAlquileres(){
    this.alquilerService.getListaAlquiler()
    .subscribe({
      next: (resp => {
        this.alquileres=resp;
        if(this.alquileres.length==0){
          Swal.fire({
            title: 'No tiene alquileres realizados',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          this.router.navigateByUrl('coches');

        }else{
          this.dtTrigger.next(resp);
        }


     })
   });
  }

  /**
   * Borra un alquiler a partir de la id del alquier que se obtiene a través del path
   * @param id del alquiler a borrar
   */
  borrar(id:number){
    this.alquilerService.borrarAlquiler(id).subscribe(resp=>{
      Swal.fire({
        title: "Alquiler borrado",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.router.navigateByUrl('coches');
    });

  }
}


