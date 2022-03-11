import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Accesorio, AlquilerDTO, Coche } from 'src/app/interfaces/interface';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { CochesService } from 'src/app/services/coches.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
  coche!:Coche;
  imagen!:string;
  accesorios:Accesorio[] = [];
  precio:Number = 0;
  mostrarPrecio:boolean = false;

  /**
   * Formato LocalDateTime
   */
  fechaActual = new Date().toJSON().slice(0,19);

  //Todos los números de tarjeta Visa comienzan con el número 4.
  //Las tarjetas nuevas tienen 16 dígitos. Las tarjetas viejas tienen 13.


  alquiler={
    numDias:0,
    fecha: this.fechaActual,
    tarjeta:'',
  }

  mostrar:boolean = false;
  constructor(private rutaActiva: ActivatedRoute,
    private servicioCoche:CochesService,
    private servicioAlquiler:AlquilerService,
    private router:Router) { }

  /**
   * Reseta los valores del formulario al cargar el componente y carga el coche elegido y los accesorios
   * disponibles del backend
   */
  ngOnInit(): void {
    this.getCoche();
    this.getAccesorios();
  }

  /**
   * Obtiene el coche que se quiere alquiler a través de su id (path)
   */
  getCoche(){
    this.servicioCoche.getCochesById(this.rutaActiva.snapshot.params["id"])
    .subscribe({
      next: (resp =>{
        this.coche = resp;
        this.imagen=this.servicioCoche.obtenerImagen(this.coche);
        this.mostrar = true;
      })
    })
  }

  /**
   * Obtiene la lista de accesorios disponibles
   */
  getAccesorios(){
    this.servicioCoche.getAccesorios()
    .subscribe({
      next: (resp =>{
        this.accesorios=resp;
      })
    })
  }

  /**
   * Crea un alquiler apartir de los accesorios marcados (checkbox) y los demas datos del formulario. Luego
   * nos manda a la pagina de nuestros alquileres
   */
  crearAlquiler(){
    let accesoriosChecked:Accesorio[] = this.servicioAlquiler.accesoriosMarcados(this.accesorios)
    let alquiler:AlquilerDTO = {
      idUser: localStorage.getItem("idUser")!,
      coche:this.coche.id,
      numDias:this.alquiler.numDias,
      fecha:this.alquiler.fecha,
      accesorios:accesoriosChecked
    }
    this.servicioAlquiler.crearAlquiler(alquiler)
    .subscribe({
      next: (()=>{
        Swal.fire({
          title: "Alquiler creado",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigateByUrl('listaAlquiler');
      }),
      error: (err)=>{
        Swal.fire({
          title: `${err.error.mensaje}`,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }

    });
  }

  /**
   * Calcula el precio del alquiler a partir de los datos elegidos en el formulario y nos lo muestra
   */
  calcularPrecio(){
    let accesoriosChecked:Accesorio[] = this.servicioAlquiler.accesoriosMarcados(this.accesorios)
    let alquiler:AlquilerDTO = {
      idUser: localStorage.getItem("idUser")!,
      coche:this.coche.id,
      numDias:this.alquiler.numDias,
      fecha:this.alquiler.fecha,
      accesorios:accesoriosChecked
    }
    this.servicioAlquiler.calcularPrecio(alquiler).subscribe(resp=>{
      this.precio=resp;
      this.mostrarPrecio=true;
    });

  }
}
