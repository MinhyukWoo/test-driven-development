import { MoneyFactory } from '../src/moneyFactory';
import { Money } from '../src/money';

describe('Test of Currency', () => {
  test('Test Dollar Multipliaction', () => {
    const five = MoneyFactory.dollar(5);
    expect(five).toBeInstanceOf(Money);

    expect(five.times(2).equals(MoneyFactory.dollar(10))).toBeTruthy();

    expect(five.times(3).equals(MoneyFactory.dollar(15))).toBeTruthy();
  });

  test('Test Equality', () => {
    expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(5))).toBeTruthy();
    expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(6))).toBeFalsy();
    expect(MoneyFactory.franc(5).equals(MoneyFactory.franc(5))).toBeTruthy();
    expect(MoneyFactory.franc(5).equals(MoneyFactory.franc(6))).toBeFalsy();
    expect(MoneyFactory.franc(5).equals(MoneyFactory.dollar(5))).toBeFalsy();
  });

  test('Test Franc Multipliaction', () => {
    const five = MoneyFactory.franc(5);
    expect(five).toBeInstanceOf(Money);

    expect(five.times(2).equals(MoneyFactory.franc(10))).toBeTruthy();

    expect(five.times(3).equals(MoneyFactory.franc(15))).toBeTruthy();
  });
});
