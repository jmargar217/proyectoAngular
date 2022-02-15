import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { AlquileresRoutingModule } from './alquileres-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { BorrarAlquilerComponent } from './borrar-alquiler/borrar-alquiler.component';

@NgModule({
  declarations: [
    AlquileresComponent,
    BorrarAlquilerComponent
  ],
  exports:[AlquileresComponent,BorrarAlquilerComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    AlquileresRoutingModule
  ]
})
export class AlquileresModule { }
