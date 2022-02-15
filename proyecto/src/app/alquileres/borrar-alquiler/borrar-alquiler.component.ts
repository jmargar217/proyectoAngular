import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlquilerService } from 'src/app/services/alquiler.service';

@Component({
  selector: 'app-borrar-alquiler',
  templateUrl: './borrar-alquiler.component.html',
  styleUrls: ['./borrar-alquiler.component.css']
})
export class BorrarAlquilerComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private servicioAlquiler:AlquilerService,
    private router:Router) { }

  ngOnInit(): void {
    this.borrar();
  }

  borrar(){
    this.servicioAlquiler.borrarAlquiler(this.rutaActiva.snapshot.params["id"]).subscribe(resp=>{
      this.router.navigateByUrl('coches');
    });
  }
}
