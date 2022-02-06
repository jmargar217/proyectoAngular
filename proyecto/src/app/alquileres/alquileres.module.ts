import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { AlquileresRoutingModule } from './alquileres-routing.module';

@NgModule({
  declarations: [
    AlquileresComponent
  ],
  exports:[AlquileresComponent],
  imports: [
    CommonModule,
    AlquileresRoutingModule
  ]
})
export class AlquileresModule { }
