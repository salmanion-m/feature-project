import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationFunComponent } from './explanation-fun.component';

describe('ExplanationFunComponent', () => {
  let component: ExplanationFunComponent;
  let fixture: ComponentFixture<ExplanationFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationFunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
