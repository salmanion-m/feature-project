import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationLetterComponent } from './explanation-letter.component';

describe('ExplanationLetterComponent', () => {
  let component: ExplanationLetterComponent;
  let fixture: ComponentFixture<ExplanationLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
