import { Bank } from './bank';
import { Money } from './money';

export class Expression {
  /**
   * @param {Expression} addend
   * @returns {Expression}
   */
  plus(addend) {
    throw new Error('Abstract method must be implemented.');
  }

  /**
   *
   *
   * @param {number} multiplier
   * @returns {Expression}
   */
  times(multiplier) {
    throw new Error('Abstract method must be implemented.');
  }

  /**
   *
   * @param {Bank} bank
   * @param {string} to Target Currency
   * @returns {Money}
   */
  reduce(bank, to) {
    throw new Error('Abstract method must be implemented.');
  }
}
