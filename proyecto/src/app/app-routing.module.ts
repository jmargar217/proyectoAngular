import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CochesComponent } from './coches/coches/coches.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component:HomeComponent},

  { path: 'login',
    loadChildren: () => import('./control-access/control-access.module').then(m => m.ControlAccessModule)
  },

  { path: 'registro',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  { path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then(m => m.UbicacionModule)
  },

  { path:'coches',component:CochesComponent,canActivate:[AuthGuard]},

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
