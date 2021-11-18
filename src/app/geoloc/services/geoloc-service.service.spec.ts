import { TestBed } from '@angular/core/testing';

import { GeolocServiceService } from './geoloc-service.service';

describe('GeolocServiceService', () => {
  let service: GeolocServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
