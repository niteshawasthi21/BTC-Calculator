import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-btc-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './btc-calculator.component.html',
  styleUrl: './btc-calculator.component.css',
})
export class BtcCalculatorComponent {
  priceBought: number | null = null;
  priceNow: number | null = null;
  btcAmount: number | null = null;
  resultMessage: string = 'Please fill all fields to see results.';

  calculate(): void {
    if (this.priceBought && this.priceNow && this.btcAmount) {
      const initialInvestment = this.priceBought * this.btcAmount;
      const currentValue = this.priceNow * this.btcAmount;
      const profit = currentValue - initialInvestment;
      this.resultMessage = `Initial Investment: $${initialInvestment.toFixed(
        2
      )}, Current Value: $${currentValue.toFixed(2)}, Profit: $${profit.toFixed(
        2
      )}`;
    } else {
      this.resultMessage = 'Please fill all fields to see results.';
    }
  }
}
