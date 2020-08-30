import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryCalculatorContainerComponent } from './binary-calculator-container.component';

describe('BinaryCalculatorContainerComponent', () => {
  let component: BinaryCalculatorContainerComponent;
  let fixture: ComponentFixture<BinaryCalculatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryCalculatorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryCalculatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
