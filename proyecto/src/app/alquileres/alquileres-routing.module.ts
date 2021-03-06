import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AlquileresComponent } from './alquileres/alquileres.component';

const routes: Routes = [
  {
    path: 'listaAlquiler',component: AlquileresComponent, canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AlquileresRoutingModule{}
