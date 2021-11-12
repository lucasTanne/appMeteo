import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoItemrendererComponent } from './meteo-itemrenderer.component';

describe('MeteoItemrendererComponent', () => {
  let component: MeteoItemrendererComponent;
  let fixture: ComponentFixture<MeteoItemrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoItemrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoItemrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
