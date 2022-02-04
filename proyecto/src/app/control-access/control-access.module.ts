import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlRoutingModule } from './control-access.routing.module';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlRoutingModule

  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ]

})
export class ControlAccessModule { }
