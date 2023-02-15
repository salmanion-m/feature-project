import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplineChartComponent } from './spline-chart.component';

describe('SynchronizedChartComponent', () => {
  let component: SplineChartComponent;
  let fixture: ComponentFixture<SplineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
