/*  Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be the index where the num is to inserted.
    @param: arr : array, an array that will be sorted if it is not.
    @param: num : number, the value that is used to determine where it should be inserted in the sorted array
    @return: i : number, the index where "num" should be inserted.
*/

function getIndexToIns(arr, num) {

  // simple bubble sort
  var i;
  var arrLen = arr.length;
  var sorted = 0;
  while (sorted == 0){
    sorted = 1; // will quit when no swaps are made
    for( i = 0; i < arrLen - 1; i ++){ // need -1 to avoid segment fault
      if(arr[i] > arr[i + 1]){
        var tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        sorted = 0;
      }
    }
  }
  console.log(arr);

  // determine where "num" should be inserted
  for(i=0; i< arrLen; i ++){
    if(arr[i] >= num){
      break;
    }
  }

  return i;
}
var a;
//a = getIndexToIns([40, 60], 50);
a = getIndexToIns([5, 3, 20, 3], 5);
console.log(a);
