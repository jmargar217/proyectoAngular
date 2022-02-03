import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ControlRoutingModule } from './control-access.routing.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ControlRoutingModule

  ],
  exports:[
    LoginComponent
  ]

})
export class ControlAccessModule { }
