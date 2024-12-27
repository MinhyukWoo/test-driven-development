import { Money } from '../src/money';
import { Expression } from '../src/expression';
import { Bank } from '../src/bank';

describe('Test of Currency', () => {
  test('Test Dollar Multipliaction', () => {
    const five = Money.dollar(5);
    expect(five).toBeInstanceOf(Money);
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy();
  });

  test('Test Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  test('Test Currency', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  });

  test('Test Simple Addition', () => {
    const five = Money.dollar(5);
    expect(five).toBeInstanceOf(Money);
    const sum = five.plus(five);
    expect(sum).toBeInstanceOf(Expression);
    const bank = new Bank();
    expect(bank).toBeInstanceOf(Bank);
    const reduced = bank.reduce(sum, 'USD');
    expect(reduced).toEqual(Money.dollar(10));
  });
});
