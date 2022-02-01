import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlAccessModule } from './control-access/control-access.module';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
