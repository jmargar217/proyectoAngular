import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { UbicacionRoutingModule } from './ubicacion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UbicacionComponent
  ],
  exports:[UbicacionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UbicacionRoutingModule
  ]
})
export class UbicacionModule { }
