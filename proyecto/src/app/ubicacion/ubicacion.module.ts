import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { UbicacionRoutingModule } from './ubicacion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UbicacionComponent
  ],
  exports:[UbicacionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UbicacionRoutingModule,
    SharedModule
  ]
})
export class UbicacionModule { }
