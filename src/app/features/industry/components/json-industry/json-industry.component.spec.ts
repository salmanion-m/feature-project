import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonIndustryComponent } from './json-industry.component';

describe('JsonIndustryComponent', () => {
  let component: JsonIndustryComponent;
  let fixture: ComponentFixture<JsonIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonIndustryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
