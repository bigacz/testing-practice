import caesarCipher from './caesarCipher';

test('basic words', () => {
  expect(caesarCipher('hello', 1)).toBe('IFMMP');
  expect(caesarCipher('fine', 3)).toBe('ILQH');
  expect(caesarCipher('fine', 5)).toBe('KNSJ');
});

test('sentences', () => {
  expect(caesarCipher('I like grass.', 10)).toBe('S VSUO QBKCC.');
  expect(caesarCipher('Apple, pear, etc.', 15)).toBe('PEEAT, ETPG, TIR.');
  expect(caesarCipher('"Don Quixote"', 23)).toBe('"ALK NRFULQB"');
});

test('non regular shifts', () => {
  expect(caesarCipher('Sisyphus', -16)).toBe('CSCIZREC');
  expect(caesarCipher('My name is John.', 223)).toBe('BN CPBT XH YDWC.');
  expect(caesarCipher('U@f,asdaSca', -54)).toBe('S@D,YQBYQAY');
});
