import { Bank } from './bank';
import { Sum } from './sum';

export class Money {
  static dollar(amount) {
    return new Money(amount, 'USD');
  }

  static franc(amount) {
    return new Money(amount, 'CHF');
  }

  constructor(amount, currency) {
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

  times(multiplier) {
    return new Money(this._amount * multiplier, this._currency);
  }

  /**
   * @param {Money} money
   * @returns {Sum}
   */
  plus(money) {
    return new Sum(this, money);
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
