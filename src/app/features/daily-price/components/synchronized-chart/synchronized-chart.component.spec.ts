import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizedChartComponent } from './synchronized-chart.component';

describe('SynchronizedChartComponent', () => {
  let component: SynchronizedChartComponent;
  let fixture: ComponentFixture<SynchronizedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynchronizedChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynchronizedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
