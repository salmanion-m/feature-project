import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFundComponent } from './json-fund.component';

describe('JsonFundComponent', () => {
  let component: JsonFundComponent;
  let fixture: ComponentFixture<JsonFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
