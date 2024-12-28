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
    return new Sum(this, addend);
  }

  /**
   *
   *
   * @param {number} multiplier
   * @returns {Expression}
   */
  times(multiplier) {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
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
