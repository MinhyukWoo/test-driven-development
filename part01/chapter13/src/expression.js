export class Expression {
  /**
   *
   * @param {string} to Target Currency
   * @returns {Money}
   */
  reduce(to) {
    throw new Error('Abstract method must be implemented.');
  }
}
