import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesComponent } from './coches/coches.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { DataTablesModule } from 'angular-datatables';
import { CochesRoutingModule } from './coches-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  declarations: [
    CochesComponent,
    AlquilerComponent
  ],
  exports:[
    CochesComponent,
    AlquilerComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    CochesRoutingModule,
    FormsModule,
    SharedModule,
    PinchZoomModule
  ]
})
export class CochesModule { }
