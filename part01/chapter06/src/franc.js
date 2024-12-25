import { Money } from './money';

export class Franc extends Money {
  constructor(amount) {
    super();
    this._amount = amount;
  }
  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }
}
