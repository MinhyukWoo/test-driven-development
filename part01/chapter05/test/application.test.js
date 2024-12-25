import { Dollar } from '../src/Dollar';

describe('Test of Dollar', () => {
  test('test multipliaction', () => {
    const five = new Dollar(5);
    expect(five).toBeInstanceOf(Dollar);

    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();

    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });

  test('test equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
