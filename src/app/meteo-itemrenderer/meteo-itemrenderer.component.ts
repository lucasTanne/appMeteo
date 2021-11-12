import { Component, Input, OnInit } from '@angular/core';
import { MeteoItem } from '../meteo/vo/meteo-item.vo';

@Component({
  selector: 'app-meteo-itemrenderer',
  templateUrl: './meteo-itemrenderer.component.html',
  styleUrls: ['./meteo-itemrenderer.component.css']
})
export class MeteoItemrendererComponent implements OnInit {
  @Input() meteoItem!: MeteoItem

  constructor() {}

  ngOnInit(): void {
  }

}
