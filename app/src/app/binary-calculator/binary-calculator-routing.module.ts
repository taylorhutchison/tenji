import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinaryCalculatorContainerComponent } from './components/binary-calculator-container/binary-calculator-container.component';


const routes: Routes = [
  { path: '', component: BinaryCalculatorContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinaryCalculatorRoutingModule { }
