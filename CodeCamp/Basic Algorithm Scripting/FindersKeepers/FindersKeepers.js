/*  Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
    @param: arr : array of numbers
    @param: func : function, the function that the elements of the array are used, returns a boolean
    @return: firstFound : number, returns the first element that satisfies the function.
*/

function findElement(arr, func) {
  var firstFound;

/* Doesn't work
  arr.forEach(function(element) {
    if(func(element) == true) {
      return element; // either return or break using an interrupt exception
    }
  });
  */

  var i;
  var arrLen = arr.length;
  for (i = 0; i < arrLen; i ++){
    if(func(arr[i])){
      firstFound = arr[i];
      break;
    }
  }

  return firstFound;
}

var ret = findElement([1, 2, 3, 4], num => num % 2 === 0);  // function is if even number

console.log(ret);

var retOdd = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });

console.log(retOdd);
