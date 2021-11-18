import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MeteoGeolocComponent } from '../meteo-geoloc/meteo-geoloc.component';
import { GeolocServiceService } from './services/geoloc-service.service';
import { GeolocToCityService } from './services/geoloc-to-city.service';

export const geolocRouteList: Routes = [
  {
    path: "**",
    component: MeteoGeolocComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(geolocRouteList)
  ],
  providers: [
    GeolocServiceService,
    GeolocToCityService
  ]
})
export class GeolocModule { }
