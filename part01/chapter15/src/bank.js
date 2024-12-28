import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  constructor() {
    /**
     * @type {Map<string, Map<string, number>>}
     */
    this.rates = new Map();
  }

  /**
   *
   *
   * @param {{ source: Expression | Money; to: string; }} param0
   * @param {Expression | Money} param0.source
   * @param {string} param0.to
   * @returns {Money}
   */
  reduce({ source, to }) {
    return source.reduce(this, to);
  }

  rate(from, to) {
    return this.rates.has(from) && this.rates.get(from).has(to)
      ? this.rates.get(from).get(to)
      : 1.0;
  }

  addRate({ from, to, rate }) {
    const rates = this.rates.has(from) ? this.rates.get(from) : new Map();
    if (!this.rates.has(from)) this.rates.set(from, rates);
    rates.set(to, rate);
  }
}
