import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesComponent } from './coches/coches.component';
import { CocheComponent } from './coche/coche.component';



@NgModule({
  declarations: [
    CochesComponent,
    CocheComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CochesModule { }
