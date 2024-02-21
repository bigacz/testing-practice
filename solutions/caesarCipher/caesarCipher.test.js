import caesarCipher from './caesarCipher';

test('basic words', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
  expect(caesarCipher('fine', 3)).toBe('ilqh');
  expect(caesarCipher('fine', 5)).toBe('knsj');
});

test('case-sensitivity', () => {
  expect(caesarCipher('Tom', 44)).toBe('Lge');
  expect(caesarCipher('AsAdf ASfWq', 5)).toBe('FxFik FXkBv');
  expect(caesarCipher('Random@Wor d', 12)).toBe('Dmzpay@Iad p');
});

test('sentences', () => {
  expect(caesarCipher('i like grass.', 10)).toBe('s vsuo qbkcc.');
  expect(caesarCipher('apple, pear, etc.', 15)).toBe('peeat, etpg, tir.');
  expect(caesarCipher('"don quixote"', 23)).toBe('"alk nrfulqb"');
});

test('non regular shifts', () => {
  expect(caesarCipher('sisyphus', -16)).toBe('cscizrec');
  expect(caesarCipher('my name is john.', 223)).toBe('bn cpbt xh ydwc.');
  expect(caesarCipher('u@f,asdasca', -54)).toBe('s@d,yqbyqay');
});
