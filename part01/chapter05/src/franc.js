export class Franc {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }
  times(multiplier) {
    return new Franc(this.#amount * multiplier);
  }

  /**
   * @param {Franc} franc
   * @returns {boolean}
   */
  equals(franc) {
    return this.#amount === franc.#amount;
  }
}
