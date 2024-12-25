import { Dollar } from '../src/Dollar';

describe('Test of Dollar', () => {
  test('test multipliaction', () => {
    const five = new Dollar(5);
    expect(five).toBeInstanceOf(Dollar);

    let product = five.times(2);
    expect(product).toBeInstanceOf(Dollar);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  test('test equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
