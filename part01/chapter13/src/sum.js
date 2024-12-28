import { Expression } from './expression';
import { Money } from './money';

export class Sum extends Expression {
  /**
   *
   * @param {Money} augend
   * @param {Money} addend
   */
  constructor(augend, addend) {
    super();
    this.augend = augend;
    this.addend = addend;
  }

  /**
   *
   * @param {string} to Target Currency
   * @returns {Money}
   */
  reduce(to) {
    return new Money(this.augend.amount + this.addend.amount, to);
  }
}
