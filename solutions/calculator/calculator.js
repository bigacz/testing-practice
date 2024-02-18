function add(a, b) {
  if (!areTypesCorrect(a, b)) {
    return NaN;
  }

  return a + b;
}

function subtract(a, b) {
  if (!areTypesCorrect(a, b)) {
    return NaN;
  }

  return a - b;
}

function divide(a, b) {
  if (!areTypesCorrect(a, b)) {
    return NaN;
  }

  return a / b;
}

function multiply(a, b) {
  if (!areTypesCorrect(a, b)) {
    return NaN;
  }

  return a * b;
}

const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

export default calculator;

// Helper Functions

function areTypesCorrect(a, b) {
  const sameType = areSameType(a, b);

  return sameType && isNumber(a) && isNumber(b);
}

function isNumber(input) {
  const isNum = typeof input === 'number';
  const isBigInt = typeof input === 'bigint';

  return isBigInt || (isNum && isFinite(input));
}

function areSameType(a, b) {
  const firstType = typeof a;
  const secondType = typeof b;

  return firstType === secondType;
}
