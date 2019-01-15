/*  The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32
    @param: celsius : number, The temperature in celsius that is to be converted to fahrenheit
    @return: fahrenheit : number, The temperature in fahrenheit that was converted from celsius
*/
function convertToF(celsius) {
  let fahrenheit;

  fahrenheit = (celsius * (9/5)) + 32;

  return fahrenheit;
}

var retCelsius = convertToF(30);

console.log(retCelsius);
