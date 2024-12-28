import { Money } from '../src/money';
import { Expression } from '../src/expression';
import { Bank } from '../src/bank';
import { Sum } from '../src/sum';

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
    const reduced = bank.reduce({ source: sum, to: 'USD' });
    expect(reduced).toEqual(Money.dollar(10));
  });

  test('Test Plus Returns Sum', () => {
    const five = Money.dollar(5);
    expect(five).toBeInstanceOf(Money);
    const sum = five.plus(five);
    expect(sum).toBeInstanceOf(Expression);
    expect(sum).toBeInstanceOf(Sum);
    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  test('Test Reduce Sum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    expect(bank).toBeInstanceOf(Bank);
    const result = bank.reduce({ source: sum, to: 'USD' });
    expect(result).toEqual(Money.dollar(7));
  });

  test('Test Reduce Money', () => {
    const bank = new Bank();
    const result = bank.reduce({ source: Money.dollar(1), to: 'USD' });
    expect(result).toEqual(Money.dollar(1));
  });

  test('Test Reduce Moeny Different Currency', () => {
    const bank = new Bank();
    bank.addRate({ from: 'CHF', to: 'USD', rate: 2 });
    const result = bank.reduce({ source: Money.franc(2), to: 'USD' });
    expect(result).toEqual(Money.dollar(1));
  });

  test('Test Identity Rate', () => {
    expect(new Bank().rate('USD', 'USD')).toEqual(1);
  });
});
