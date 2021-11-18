import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoGeolocComponent } from './meteo-geoloc.component';

describe('MeteoGeolocComponent', () => {
  let component: MeteoGeolocComponent;
  let fixture: ComponentFixture<MeteoGeolocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoGeolocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoGeolocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
