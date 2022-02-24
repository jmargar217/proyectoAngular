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

  ngOnInit(): void {
    this.getAlquileres();
    this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength:5
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

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

  borrar(id:number){
    this.alquilerService.borrarAlquiler(id).subscribe(resp=>{
      this.router.navigateByUrl('coches');
    });

  }
}


