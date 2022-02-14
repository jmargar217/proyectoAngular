import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
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
import { BuscadorComponent } from './shared/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BuscadorComponent
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
    FormsModule
  ],
  providers: [AuthGuard, LoginService, CochesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
