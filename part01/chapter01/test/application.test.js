import { Dollar } from '../src/Dollar';

test('test multipliaction', () => {
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toBe(10);
});
