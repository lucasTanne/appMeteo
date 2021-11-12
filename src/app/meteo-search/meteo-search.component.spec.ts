import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoSearchComponent } from './meteo-search.component';

describe('MeteoSearchComponent', () => {
  let component: MeteoSearchComponent;
  let fixture: ComponentFixture<MeteoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
