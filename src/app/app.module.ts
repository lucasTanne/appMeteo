import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';

import { AppComponent } from './app.component';
import { MeteoGeolocComponent } from './meteo-geoloc/meteo-geoloc.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoGeolocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
