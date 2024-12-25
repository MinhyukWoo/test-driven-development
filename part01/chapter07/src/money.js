export class Money {
  constructor() {
    this._amount = null;
  }

  /**
   * @param {Money} money
   * @returns {boolean}
   */
  equals(money) {
    return this._amount === money._amount;
  }
}
