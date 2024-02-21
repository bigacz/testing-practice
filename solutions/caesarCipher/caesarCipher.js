const upperCaseBoundaries = [65, 90];
const lowerCaseBoundaries = [97, 122];

function caesarCipher(string, factor) {
  const signs = string.split('');

  const cipheredCodesArray = signs.map((sign) => {
    const charCode = sign.charCodeAt(0);

    let returnCode = charCode;

    if (isLetter(charCode)) {
      const shiftedCode = getShiftedCode(charCode, factor);

      returnCode = shiftedCode;
    }

    return returnCode;
  });

  const cipheredString = String.fromCharCode(...cipheredCodesArray);

  return cipheredString;
}

export default caesarCipher;

// Helper functions

function getShiftedCode(originalCode, factor) {
  let isUpper = isUpperCase(originalCode);

  let boundaries = lowerCaseBoundaries;
  if (isUpper) {
    boundaries = upperCaseBoundaries;
  }

  let [alphabetStart, alphabetEnd] = boundaries;

  const shiftedCode = originalCode + factor;

  let returnCode = shiftedCode;
  if (shiftedCode > alphabetEnd) {
    const shiftAmount = shiftedCode - (alphabetEnd + 1);

    returnCode = getShiftedCode(alphabetStart, shiftAmount);
  } else if (shiftedCode < alphabetStart) {
    const shiftAmount = -(alphabetStart - 1 - shiftedCode);

    returnCode = getShiftedCode(alphabetEnd, shiftAmount);
  }

  return returnCode;
}

function isUpperCase(code) {
  let isUpper = null;
  if (code >= 65 && code <= 90) {
    isUpper = true;
  } else if (code >= 97 && code <= 122) {
    isUpper = false;
  }

  return isUpper;
}

function isLetter(code) {
  const [upperStart, upperEnd] = upperCaseBoundaries;
  const [lowerStart, lowerEnd] = upperCaseBoundaries;
  const isUpper = code >= upperStart && upperEnd <= 90;
  const isLower = code >= lowerStart && lowerEnd <= 90;

  let returnValue = false;
  if (isUpper || isLower) {
    returnValue = true;
  }

  return returnValue;
}
