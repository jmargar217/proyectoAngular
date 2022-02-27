import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RolGuard } from '../rol.guard';
import { FicheroComponent } from './fichero/fichero.component';

const routes: Routes = [
  {
    path:'fichero',
    component:FicheroComponent,canActivate:[AuthGuard,RolGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FicherosRoutingModule{}
