import calculator from './calculator';

test('basic operations', () => {
  expect(calculator.add(8, 4)).toBe(12);
  expect(calculator.subtract(8, 4)).toBe(4);
  expect(calculator.divide(8, 4)).toBe(2);
  expect(calculator.multiply(8, 4)).toBe(32);
});

test('float operations', () => {
  expect(calculator.add(8.32, 4.2)).toBeCloseTo(12.52);
  expect(calculator.subtract(7.23, 2.45)).toBeCloseTo(4.78);
  expect(calculator.divide(10.5, 2.0)).toBeCloseTo(5.25);
  expect(calculator.multiply(3.8, 2.1)).toBeCloseTo(7.98);
});

test('BigInt operations', () => {
  expect(calculator.add(8n, 4n)).toBe(12n);
  expect(calculator.subtract(8n, 4n)).toBe(4n);
  expect(calculator.divide(8n, 4n)).toBe(2n);
  expect(calculator.multiply(8n, 4n)).toBe(32n);
});

test('wrong types', () => {
  expect(calculator.add(null, undefined)).toBe(NaN);
  expect(calculator.subtract([1, 2], 4)).toBe(NaN);
  expect(calculator.divide(10, { fine: 'okay' })).toBe(NaN);
  expect(calculator.multiply(8n, 45)).toBe(NaN);
});
