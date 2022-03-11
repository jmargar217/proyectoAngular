import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { PieComponent } from './pie/pie.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    MenuComponent,
    BuscadorComponent,
    PieComponent
  ],
  exports:[
    MenuComponent,
    BuscadorComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedRoutingModule
  ]
})

export class SharedModule{}

