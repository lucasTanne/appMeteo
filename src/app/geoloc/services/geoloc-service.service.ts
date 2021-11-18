import { Injectable } from '@angular/core';
import { GeolocToCityService } from './geoloc-to-city.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocServiceService {

  constructor() {
  }

  getCurrentPosition(): Promise<any>{
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej)
    })
  }
}
