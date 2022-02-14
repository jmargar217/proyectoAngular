import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CochesService } from 'src/app/services/coches.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  termino: string='';
  constructor(private router:Router,
    private servicioCoche:CochesService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  buscar(termino:string){
    this.termino=termino;
    this.servicioCoche.getCochesByMarca(this.termino).subscribe(resp=>{
      if(resp){
        Swal.fire({
          title: 'Disponemos de esa marca de coche',
          text: 'Inicie sesión para alquilarlo',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'No disponemos de esa marca de coche',
          text: 'Intentelo en otra ocación',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }

}
