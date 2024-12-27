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
}
