import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { MeteoService } from '../meteo/services/meteo.service';
import { MeteoResult } from '../meteo/vo/meteo-result.vo';

@Component({
  selector: 'app-meteo-view',
  templateUrl: './meteo-view.component.html',
  styleUrls: ['./meteo-view.component.css'],
})
export class MeteoViewComponent implements OnInit {
  public meteoResult: any;

  constructor(private meteoService: MeteoService) { }

  searchHandler(event : string){
    console.log("receive: " + event)
    this.meteoService.search(event).then((result: MeteoResult) => {
      console.log("Result.city.name: " + result.city.name)
      this.meteoResult = result
    })
  }

  ngOnInit(): void {
    
  }

}
