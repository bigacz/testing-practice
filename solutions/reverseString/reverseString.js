function reverseString(string) {
  if (typeof string !== 'string') {
    return undefined;
  }

  const reversedArray = string.split('').reverse();
  const reverserdWord = reversedArray.join('');

  return reverserdWord;
}

export default reverseString;
