import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [


  { path: '', component:HomeComponent},

  { path: 'login',
  loadChildren: () => import('./control-access/control-access.module').then(m => m.ControlAccessModule)
  },

  { path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then(m => m.UbicacionModule)
  },

  { path: 'listadoCoches',
    loadChildren: () => import('./coches/coches.module').then( m => m.CochesModule)
  },

  {
    path: '**',
    redirectTo: 'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
