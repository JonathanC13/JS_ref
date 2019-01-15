/*  Calculates the factorial of the given number.
    @param: num : number, the number to get the factorial sum of
    @return: factorialSum : number, the factorial sum of the input.
*/

function factorialize(num) {

  var factorialSum = 1;

  while (num > 0 ){
    factorialSum *= num;
    num --;
  }

  return factorialSum;
}

console.log(factorialize(5));
console.log(factorialize(0));
