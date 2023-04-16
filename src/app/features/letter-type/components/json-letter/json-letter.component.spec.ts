import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonLetterComponent } from './json-letter.component';

describe('JsonLetterComponent', () => {
  let component: JsonLetterComponent;
  let fixture: ComponentFixture<JsonLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
