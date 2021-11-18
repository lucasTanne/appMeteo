import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'geoloc', pathMatch: 'full'},
  { path: 'meteo', loadChildren: () => import('../meteo/meteo.module').then((m) => m.MeteoModule)},
  { path: 'geoloc', loadChildren: () => import('../geoloc/geoloc.module').then((m) => m.GeolocModule)},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModuleModule { }
