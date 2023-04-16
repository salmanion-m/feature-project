import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationIndustryComponent } from './explanation-industry.component';

describe('ExplanationIndustryComponent', () => {
  let component: ExplanationIndustryComponent;
  let fixture: ComponentFixture<ExplanationIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationIndustryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
