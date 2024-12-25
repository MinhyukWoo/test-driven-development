import { Money } from './money';
import { MoneyFactory } from './moneyFactory';

export class Dollar extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }

  times(multiplier) {
    return MoneyFactory.dollar(this._amount * multiplier);
  }
}
