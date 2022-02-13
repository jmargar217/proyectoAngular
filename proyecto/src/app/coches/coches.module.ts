import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesComponent } from './coches/coches.component';
import { AlquilerComponent } from './alquiler/alquiler.component';
import { DataTablesModule } from 'angular-datatables';
import { CochesRoutingModule } from './coches-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    FormsModule

  ]
})
export class CochesModule { }
