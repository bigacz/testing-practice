function caesarCipher(string, factor) {
  const signs = string.toUpperCase().split('');

  const cipheredCodesArray = signs.map((sign) => {
    const charCode = sign.charCodeAt(0);

    let returnCode = charCode;
    if (charCode <= 90 && charCode >= 65) {
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
  const shiftedCode = originalCode + factor;

  let returnCode = shiftedCode;
  if (shiftedCode > 90) {
    const shiftAmount = shiftedCode - 91;

    returnCode = getShiftedCode(65, shiftAmount);
  } else if (shiftedCode < 65) {
    const shiftAmount = -(64 - shiftedCode);

    returnCode = getShiftedCode(90, shiftAmount);
  }

  return returnCode;
}
