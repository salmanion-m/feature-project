import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartDailyPriceComponent } from './line-chart-daily-price.component';

describe('LineChartDailyPriceComponent', () => {
  let component: LineChartDailyPriceComponent;
  let fixture: ComponentFixture<LineChartDailyPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartDailyPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartDailyPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
