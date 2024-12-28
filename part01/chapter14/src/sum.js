import { Bank } from './bank';
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
   * @param {Bank} bank
   * @param {string} to Target Currency
   * @returns {Money}
   */
  reduce(bank, to) {
    return new Money(this.augend.amount + this.addend.amount, to);
  }
}
