import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinaryCalculatorContainerComponent } from './components/binary-calculator-container/binary-calculator-container.component';
import { BinaryCalculatorRoutingModule } from './binary-calculator-routing.module';
import { BitComponent } from './components/bit/bit.component';



@NgModule({
  declarations: [BinaryCalculatorContainerComponent, BitComponent],
  imports: [
    CommonModule,
    BinaryCalculatorRoutingModule
  ]
})
export class BinaryCalculatorModule { }
