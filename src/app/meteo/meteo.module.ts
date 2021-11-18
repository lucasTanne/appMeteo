import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoViewComponent } from '../meteo-view/meteo-view.component';
import { MeteoSearchComponent } from '../meteo-search/meteo-search.component';
import { MeteoItemrendererComponent } from '../meteo-itemrenderer/meteo-itemrenderer.component';
import { FormsModule } from '@angular/forms';
import { MeteoService } from './services/meteo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PipeDegreePipe } from '../pipe-degree.pipe';
import { RouterModule, Routes } from '@angular/router';

export const MeteoRouteList: Routes = [
  {
    path: '**',
    component: MeteoViewComponent
  }
]


@NgModule({
  declarations: [
    MeteoViewComponent,
    MeteoSearchComponent,
    MeteoItemrendererComponent,
    PipeDegreePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(MeteoRouteList)
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
