import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheroComponent } from './fichero/fichero.component';

const routes: Routes = [
  {
    path:'fichero',
    component:FicheroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FicherosRoutingModule{}
