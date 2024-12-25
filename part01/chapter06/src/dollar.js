import { Money } from './money';

export class Dollar extends Money {
  constructor(amount) {
    super();
    this._amount = amount;
  }
  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }
}
