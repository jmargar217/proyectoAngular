import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  { path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  { path: 'login',
  loadChildren: () => import('./control-access/control-access.module').then(m => m.ControlAccessModule)
  },

  { path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then(m => m.UbicacionModule)
  },

  { path: 'listadoCoches',
    loadChildren: () => import('./coches/coches.module').then( m => m.CochesModule)
  },

  { path: 'listadoAlquileres',
    loadChildren:() => import('./alquileres/alquileres.module').then(m => m.AlquileresModule)

  },
  {
    path: 'menu',
    loadChildren:() => import('./shared/shared.module').then(m => m.SharedModule)
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
