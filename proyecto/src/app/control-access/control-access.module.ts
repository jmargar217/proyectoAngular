import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class ControlAccessModule { }
