import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { AlquileresRoutingModule } from './alquileres-routing.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AlquileresComponent
  ],
  exports:[AlquileresComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    AlquileresRoutingModule
  ]
})
export class AlquileresModule { }
