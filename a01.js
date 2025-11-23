function multiply(number1, number2) {
  if (number2 === undefined)
    return number1;
  else
    return number1 * number2;
}

function multiplyAll() {
  let values = Object.values(arguments); // array of values
  let result = 1;
  for (let i = 0; i < values.length; i++) {
    result = result * values[i];
  }
  return result;
}