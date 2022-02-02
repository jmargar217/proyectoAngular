import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CochesComponent } from './coches/coches/coches.component';
import { LoginComponent } from './control-access/login/login.component';
import { RegistroComponent } from './control-access/registro/registro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent},

  { path: 'login',component:LoginComponent},
  { path: 'registro',component:RegistroComponent},

  { path:'coches',component:CochesComponent, canActivate:[AuthGuard]},

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
