import analyzeArray from './analyzeArray';

test('works with integers', () => {
  expect(analyzeArray([8, 20, 33, 25, 4, 6])).toEqual({
    average: 16,
    min: 4,
    max: 33,
    length: 6,
  });
});

test('works with negatives', () => {
  expect(analyzeArray([-5, 20, -13, 8])).toEqual({
    average: 2.5,
    min: -13,
    max: 20,
    length: 4,
  });
});

test('works with floats', () => {
  expect(analyzeArray([3.1, 8.3, 2.22, 6.43])).toEqual({
    average: 5.0125,
    min: 2.22,
    max: 8.3,
    length: 4,
  });
});
