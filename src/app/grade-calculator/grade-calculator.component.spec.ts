import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCalculatorComponent } from './grade-calculator.component';

describe('GradeCalculatorComponent', () => {
  let component: GradeCalculatorComponent;
  let fixture: ComponentFixture<GradeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
