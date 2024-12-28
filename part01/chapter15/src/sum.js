import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';

export class Sum extends Expression {
  /**
   *
   * @param {Expression} augend
   * @param {Expression} addend
   */
  constructor(augend, addend) {
    super();
    this.augend = augend;
    this.addend = addend;
  }

  /**
   * @param {Expression} addend
   * @returns {Sum}
   */
  plus(addend) {
    return null;
  }

  /**
   *
   * @param {Bank} bank
   * @param {string} to Target Currency
   * @returns {Money}
   */
  reduce(bank, to) {
    return new Money(
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount,
      to
    );
  }
}
