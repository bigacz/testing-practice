import reverseString from './reverseString';

test('reverse string', () => {
  expect(reverseString('word')).toBe('drow');
  expect(reverseString('Lorem Ipsum.')).toBe('.muspI meroL');
});

test('empty string', () => {
  expect(reverseString('')).toBe('');
});

test('wrong type', () => {
  expect(reverseString(123)).toBe(undefined);
  expect(reverseString({ hello: 'fine' })).toBe(undefined);
  expect(reverseString([1, 2, 3])).toBe(undefined);
  expect(reverseString(3n)).toBe(undefined);
});
