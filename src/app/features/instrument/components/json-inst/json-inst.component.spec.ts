import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonInstComponent } from './json-inst.component';

describe('JsonInstComponent', () => {
  let component: JsonInstComponent;
  let fixture: ComponentFixture<JsonInstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonInstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
