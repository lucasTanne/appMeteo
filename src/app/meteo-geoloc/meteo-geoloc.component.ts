import { Component, DebugElement, OnInit } from '@angular/core';
import { GeolocServiceService } from '../geoloc/services/geoloc-service.service';
import { GeolocToCityService } from '../geoloc/services/geoloc-to-city.service';

@Component({
  selector: 'app-meteo-geoloc',
  templateUrl: './meteo-geoloc.component.html',
  styleUrls: ['./meteo-geoloc.component.css']
})
export class MeteoGeolocComponent implements OnInit {
  nomVille: string = ""

  constructor(private geolocServ: GeolocServiceService, private geolocToCity: GeolocToCityService) {
  }

  ngOnInit(): void {
    this.geolocServ.getCurrentPosition().then((result) => {
      const {latitude, longitude } = result.coords
      console.log("Latitude: " + latitude)
      console.log("longitude: " + longitude)
      this.geolocToCity.getCityByLocation(latitude, longitude).then((result) => {
        console.log("recut");
      })
    })
  }

}
