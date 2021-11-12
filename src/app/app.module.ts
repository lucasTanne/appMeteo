import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeteoModule } from './meteo/meteo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MeteoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
