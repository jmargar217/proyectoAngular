import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { UbicacionRoutingModule } from './ubicacion-routing.module';



@NgModule({
  declarations: [
    UbicacionComponent
  ],
  exports:[UbicacionComponent],
  imports: [
    CommonModule,
    UbicacionRoutingModule
  ]
})
export class UbicacionModule { }
