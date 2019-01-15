/*  Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
    @param: arr: Matrix, 2D array of numbers.
    @return: retArray : array of size 4, the largest number of each sub array from the matrix
*/

function largestOfFour(arr) {

  var largestForSub;
  var retArray = [];

  var x;
  var y;
  var arrLen = arr.length;

  // iterate sub arrays
  for (x = 0; x < arrLen; x ++){

    // set initial value to compare to.
    largestForSub = arr[x][0];
    // iterate contents of sub arrays
    var arrCurLen = arr[x].length;
    for (y = 0; y < arrCurLen; y ++){
      if(arr[x][y] > largestForSub){
        largestForSub = arr[x][y];
      }
    }

    // Push to ret array
    retArray.push(largestForSub);

  }

  return retArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
