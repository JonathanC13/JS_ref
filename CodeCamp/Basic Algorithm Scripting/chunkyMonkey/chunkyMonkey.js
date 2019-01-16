/*  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
    @param: arr : array, array of values to split into chunks
    @param: size : number, the size of the chunks
    @return: newMatrix : 2D array, chunks of the original array into a 2D array
*/

function chunkArrayInGroups(arr, size) {

  var arrLen = arr.length;
  var rows = Math.ceil(arrLen/size);
  var newMatrix = [];


  var i;
  for(i = 0; i < rows; i ++){
    var arrRow = [];
    var rowStart = i*size;
    var rowEnd = rowStart + size;

    // check if last row
    if (rowEnd > arrLen){
      arrRow = arr.slice(rowStart, arrLen);
    } else {
      arrRow = arr.slice(rowStart, rowEnd);
    }

    //console.log(arrRow);
    // push to matrix
    newMatrix.push(arrRow);
    //console.log(newMatrix);
  }

/*
  var k,m;
  for (k = 0; k < rows; k ++){
    console.log("row " + k + ": " );
    for(m = 0; m < size; m ++){
      console.log(newMatrix[k][m] + " ");
    }

  }
  */

  return newMatrix;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
