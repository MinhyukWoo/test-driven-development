import { Bank } from './bank';
import { Expression } from './expression';
import { Sum } from './sum';

export class Money extends Expression {
  static dollar(amount) {
    return new Money(amount, 'USD');
  }

  static franc(amount) {
    return new Money(amount, 'CHF');
  }

  constructor(amount, currency) {
    super();
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {Money} money
   * @returns {boolean}
   */
  equals(money) {
    return (
      this._amount === money._amount && this.currency() === money.currency()
    );
  }

  currency() {
    return this._currency;
  }

  /**
   *
   *
   * @param {number} multiplier
   * @returns {Expression}
   */
  times(multiplier) {
    return new Money(this._amount * multiplier, this._currency);
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
   * @param {Bank} bank
   * @param {string} to Target Currency
   * @returns {Money}
   */
  reduce(bank, to) {
    const rate = bank.rate(this.currency(), to);
    return new Money(this.amount / rate, to);
  }
}
