import { Expression } from './expression';
import { Money } from './money';
import { Sum } from './sum';

export class Bank {
  /**
   *
   *
   * @param {{ source: Expression | Money; to: string; }} param0
   * @param {Expression | Money} param0.source
   * @param {string} param0.to
   * @returns {Money}
   */
  reduce({ source, to }) {
    return source.reduce(to);
  }
}
