import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CochesService } from 'src/app/services/coches.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() nombre!:string;
  termino: string='';
  mostrar:boolean=false;
  rol = localStorage.getItem("rol");
  constructor(private router:Router,
    private servicioCoche:CochesService,
    private rutaActiva:ActivatedRoute) { }

  /**
   * Comprueba el rol del usuario que se encuentra logueado, de ser admin muestra contenido diferente
   */
  ngOnInit(): void {
    this.rutaActiva.queryParams.subscribe(params=>{
      this.rol=params['rol'];
      if(this.rol=="ADMIN"){
        this.mostrar=true;
      }
    })
  }

  redirige(){
    this.router.navigateByUrl('');
  }

  /**
   * Borra del localStorage todos los datos
   */
  logout(){
    localStorage.clear();
    this.mostrar=false;
    this.router.navigateByUrl('');
  }

  /**
   * Lanza una peticion a la API para saber si un coche de una determinada marca se encuentra o no. Devuelve
   * una alerta dependiendo del resultado (true or false)
   * @param termino marca de coche buscada
   */
  buscar(termino:string){
    this.termino=termino;
    this.servicioCoche.getCochesByMarca(this.termino).subscribe(resp=>{
      if(resp){
        Swal.fire({
          title: 'Disponemos de esa marca de coche',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'No disponemos de esa marca de coche',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    });
  }

}
