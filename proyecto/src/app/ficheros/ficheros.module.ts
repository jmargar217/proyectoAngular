import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FicheroComponent } from './fichero/fichero.component';
import { FicherosRoutingModule } from './ficheros-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FicheroComponent
  ],
  imports: [
    CommonModule,
    FicherosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ],
  exports:[FicheroComponent]
})
export class FicherosModule { }
