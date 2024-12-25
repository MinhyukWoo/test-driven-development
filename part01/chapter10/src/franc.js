import { Money } from './money';
import { MoneyFactory } from './moneyFactory';

export class Franc extends Money {
  constructor(amount, currency) {
    super(amount, currency);
  }

  times(multiplier) {
    return MoneyFactory.franc(this._amount * multiplier);
  }
}
