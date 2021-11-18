import { TestBed } from '@angular/core/testing';

import { GeolocToCityService } from './geoloc-to-city.service';

describe('GeolocToCityService', () => {
  let service: GeolocToCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocToCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
