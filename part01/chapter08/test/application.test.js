import { Dollar } from '../src/Dollar';
import { Franc } from '../src/franc';

describe('Test of Currency', () => {
  test('Test Dollar Multipliaction', () => {
    const five = new Dollar(5);
    expect(five).toBeInstanceOf(Dollar);

    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();

    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });

  test('Test Equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    expect(new Franc(5).equals(new Dollar(5))).toBeFalsy();
  });

  test('Test Franc Multipliaction', () => {
    const five = new Franc(5);
    expect(five).toBeInstanceOf(Franc);

    expect(five.times(2).equals(new Franc(10))).toBeTruthy();

    expect(five.times(3).equals(new Franc(15))).toBeTruthy();
  });
});
