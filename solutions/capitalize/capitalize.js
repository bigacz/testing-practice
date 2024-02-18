function capitalize(string) {
  if (typeof string !== 'string') {
    return;
  }
  if (string.length < 1) {
    return '';
  }

  const stringArray = string.split('');
  const capitalizedFirst = stringArray[0].toUpperCase();

  const capitalizedArray = stringArray.toSpliced(0, 1, capitalizedFirst);
  const capitalizedWord = capitalizedArray.join('');

  return capitalizedWord;
}

export default capitalize;
