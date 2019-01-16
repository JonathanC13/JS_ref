/*  Use the array methods slice and splice to copy each element of the first array into the second array starting at index n, in order.
    @param: arr1 : array, values that will be inserted into arr2
    @param: arr2 : array, arr1 values will be inseted starting at index n
    @param: n : number, starting index of arr2 that elements of arr1 will be inserted
    @return: newArr : array, combined array
*/

function frankenSplice(arr1, arr2, n) {

  // The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified. arr.slice([begin[, end]])
  // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements. array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

  var newArr = arr2.slice(0, arr2.length); // equivalent arr2.slice();

  var i;
  var arr1Len = arr1.length;
  for(i = 0; i < arr1Len; i++){

    // insert element from arr1 into starting position "n"
    newArr.splice(n + i, 0, arr1[i]);
  }

  //console.log(arr1);
  //console.log(arr2);
  //console.log(newArr);

  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
