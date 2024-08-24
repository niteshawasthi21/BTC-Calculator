import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcCalculatorComponent } from './btc-calculator.component';

describe('BtcCalculatorComponent', () => {
  let component: BtcCalculatorComponent;
  let fixture: ComponentFixture<BtcCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtcCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtcCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
