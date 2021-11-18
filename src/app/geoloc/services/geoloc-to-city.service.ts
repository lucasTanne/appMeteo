import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeolocToCityService {
  private apiKey: string = "d4fa32b1c4cc44b8a6bf0abb1d690313"
  private api: string = "https://api.opencagedata.com/geocode/v1/json?q={LAT},{LON}&key=" + this.apiKey

  constructor(private readonly http: HttpClient) { }

  getCityByLocation(latitude: any, longitude: any): Promise<any>{
    console.log("GetCity")
    console.log(latitude)
    console.log(longitude)

    let url = this.api.replace("{LAT", latitude)
    url = url.replace("{LON}", longitude)

    return this.http.get<any>(url)
      .toPromise()
      .then((result) => {
        console.log(result)
        const res: string = result as string
        return res
      }).catch((error) => {
        console.error("error ", error);
        return undefined
      })
  }
}
