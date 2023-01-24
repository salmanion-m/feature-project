import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDailyComponent } from './chart-daily.component';

describe('ChartDailyComponent', () => {
  let component: ChartDailyComponent;
  let fixture: ComponentFixture<ChartDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
