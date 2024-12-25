export class Money {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  currency() {
    throw new Error('Abstract method must be implemented.');
  }

  /**
   * @param {Money} money
   * @returns {boolean}
   */
  equals(money) {
    return (
      this._amount === money._amount && this.constructor === money.constructor
    );
  }

  currency() {
    return this._currency;
  }
}
