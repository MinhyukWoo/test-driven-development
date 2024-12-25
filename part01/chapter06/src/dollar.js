export class Dollar {
  #amount;
  constructor(amount) {
    this.#amount = amount;
  }
  times(multiplier) {
    return new Dollar(this.#amount * multiplier);
  }

  /**
   * @param {Dollar} dollar
   * @returns {boolean}
   */
  equals(dollar) {
    return this.#amount === dollar.#amount;
  }
}
