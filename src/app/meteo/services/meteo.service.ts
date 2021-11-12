import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MeteoResult } from '../vo/meteo-result.vo';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  API_KEY = "888f70e84a4d7e44f3c0d4870c926e9d";
  METEO_URL = "http://api.openweathermap.org/data/2.5/forecast?q={VILLE},FR&APPID=" + this.API_KEY + "&units=metric";

  constructor(private readonly http: HttpClient) { }

  search(ville: string): Promise<any>{
    console.log("fetch: " + ville)
    var url = this.METEO_URL;
    url = url.replace("{VILLE}", ville);

    return this.http.get<any>(url)
    .toPromise()
    .then((result) => {
      console.log(result)
      const meteoResult: MeteoResult = result as MeteoResult
      return meteoResult
    }).catch((error) => {
      console.error("error ", error);
      return undefined
    })
  }

  public searchMeteoViaSubscribe(ville: string): Promise<any> {
    console.log("fetch: " + ville)
    var url = this.METEO_URL;
    url = url.replace("{VILLE}", ville);

    return this.http.get(url)
    .toPromise()
    .then((result) => {
      console.log(result)
      const meteoResult: MeteoResult = result as MeteoResult
      return meteoResult
    }).catch((error) => {
      console.error("error ", error);
      return undefined
    })
  }
}
