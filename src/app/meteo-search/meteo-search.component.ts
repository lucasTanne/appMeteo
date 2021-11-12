import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-meteo-search',
  templateUrl: './meteo-search.component.html',
  styleUrls: ['./meteo-search.component.css']
})

@Injectable()
export class MeteoSearchComponent implements OnInit {
  @Output() open: EventEmitter<any> = new EventEmitter();
  nomVille : string;
  

  constructor() {
    this.nomVille = ""
  }

  setVille(){
    console.log("send: " + this.nomVille)
    this.open.emit(this.nomVille)
  }

  ngOnInit(): void {
  }

}
