import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoViewComponent } from '../meteo-view/meteo-view.component';
import { MeteoSearchComponent } from '../meteo-search/meteo-search.component';
import { MeteoItemrendererComponent } from '../meteo-itemrenderer/meteo-itemrenderer.component';
import { FormsModule } from '@angular/forms';
import { MeteoService } from './services/meteo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MeteoViewComponent,
    MeteoSearchComponent,
    MeteoItemrendererComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MeteoViewComponent,
    MeteoSearchComponent,
    MeteoItemrendererComponent
  ],
  providers: [
    MeteoService
  ]
})
export class MeteoModule { }
