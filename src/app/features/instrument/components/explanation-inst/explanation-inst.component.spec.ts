import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationInstComponent } from './explanation-inst.component';

describe('ExplanationInstComponent', () => {
  let component: ExplanationInstComponent;
  let fixture: ComponentFixture<ExplanationInstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationInstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
