import { Bank } from './bank';
import { Money } from './money';

export class Expression {
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
