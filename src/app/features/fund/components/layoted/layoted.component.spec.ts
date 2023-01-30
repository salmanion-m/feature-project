import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayotedComponent } from './layoted.component';

describe('LayotedComponent', () => {
  let component: LayotedComponent;
  let fixture: ComponentFixture<LayotedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayotedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
