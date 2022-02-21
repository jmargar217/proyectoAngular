import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http'
import { AuthGuard } from './auth.guard';
import { ControlAccessModule } from './control-access/control-access.module';
import { LoginService } from './services/login.service';
import { CochesService } from './services/coches.service';
import { CochesModule } from './coches/coches.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { HomeModule } from './home/home.module';
import { AlquileresModule } from './alquileres/alquileres.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { FicherosModule } from './ficheros/ficheros.module';
import { AlquilerService } from './services/alquiler.service';
import { FicheroService } from './services/fichero.service';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ControlAccessModule,
    CochesModule,
    UbicacionModule,
    AlquileresModule,
    SharedModule,
    FormsModule,
    FicherosModule
  ],
  providers: [AuthGuard, LoginService, CochesService, AlquilerService, FicheroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
