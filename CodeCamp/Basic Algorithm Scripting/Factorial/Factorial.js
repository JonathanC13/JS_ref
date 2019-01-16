/*  Calculates the factorial of the given number.
    @param: num : number, the number to get the factorial sum of
    @return: factorialSum : number, the factorial sum of the input.
*/

function factorialize(num) {

  var factorialSum = 1;

  if (num >= 0){
    while (num > 0 ){
      factorialSum *= num;
      num --;
    }
    // factorialSum = 1; if num = 0
  } else if (num < 0){
    factorial = "Please input a positive integer.";
  }
  // returns 1 if num = 0. 0! = 1;

  return factorialSum;
}

console.log(factorialize(5));
console.log(factorialize(0));
