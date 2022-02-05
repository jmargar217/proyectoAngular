import { NgModule } from '@angular/core';
import { CochesComponent } from './coches/coches.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AlquilerComponent } from './alquiler/alquiler.component';

const routes: Routes = [
  {
    path: 'coches',component: CochesComponent, canActivate:[AuthGuard]
  },
  {
    path: 'alquiler/:id',component:AlquilerComponent, canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CochesRoutingModule{}
