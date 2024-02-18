import capitalize from './capitalize';

test('capitalize word', () => {
  expect(capitalize('word')).toBe('Word');
  expect(capitalize('hello World!')).toBe('Hello World!');
  expect(capitalize('.what')).toBe('.what');
});

test('wrong input type', () => {
  const word = capitalize(12345);

  expect(word).toBe(undefined);
});

test('empty word', () => {
  const word = capitalize('');

  expect(word).toBe('');
});
