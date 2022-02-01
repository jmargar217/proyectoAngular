import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './control-access/login/login.component';
import { RegistroComponent } from './control-access/registro/registro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent},

  { path:'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},

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
