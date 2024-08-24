import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BtcCalculatorComponent } from './app/btc-calculator/btc-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BtcCalculatorComponent],
  template: `<app-btc-calculator/>`,
})
export class App {
  name = 'BTC Calculator';
}

bootstrapApplication(App);
