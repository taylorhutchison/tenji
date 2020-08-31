import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-binary-calculator-container',
  templateUrl: './binary-calculator-container.component.html',
  styleUrls: ['./binary-calculator-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BinaryCalculatorContainerComponent implements OnInit {

  constructor() { }

  bits = [false, false, false, false, false, false, false, false];

  flip(index: number) {
    this.bits[index] = !this.bits[index];
  }

  calculate(bits: boolean[]): number {
    const length = bits.length;
    return bits.reduce((prev, current, index) => {
      return prev + (current ? Math.pow(2, length - 1 - index) : 0);
    }, 0);
  }

  bitvalue(bits, index) {
    return bits[index] ? Math.pow(2, bits.length - 1 - index) : 0;
  }

  ngOnInit(): void {
  }

}
