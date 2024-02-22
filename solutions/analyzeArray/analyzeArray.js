function analyzeArray(numbers) {
  const sortedNumbers = numbers.toSorted((a, b) => a - b);

  const numbersLength = numbers.length;
  const sum = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  const arithmetic = sum / numbersLength;

  return {
    average: arithmetic,
    min: sortedNumbers[0],
    max: sortedNumbers[numbersLength - 1],
    length: numbersLength,
  };
}

export default analyzeArray;

// Helper functions
