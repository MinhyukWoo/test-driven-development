import { Dollar } from '../src/Dollar';

test('test multipliaction', () => {
  const five = new Dollar(5);
  expect(five).toBeInstanceOf(Dollar);
  
  let product = five.times(2);
  expect(product).toBeInstanceOf(Dollar);
  expect(product.amount).toBe(10);

  product = five.times(3);
  expect(product.amount).toBe(15);
});
