/*  Return true if all the letters in the second string are contained in the first string
    @param: arr : array, contains 2 strings
    @return: boolean, if all the letters in string 2 are in string 1

*/

function mutation(arr) {

  var arrLowered = [];

  // ignore case, so let's make it all lowercase
  arr.forEach(function(element){
    var s_lowered = element.toLowerCase();
    arrLowered.push(s_lowered);
  });

  var arr1Len = arrLowered[0].length;
  var arr2Len = arrLowered[1].length;
  var good = 0;

  var i,j;
  // iterate second str
  for(i=0; i<arr2Len; i++){
    good = 0;
    // iterate first str
    for(j=0; j<arr1Len; j++){
      console.log(arrLowered[1][i] + " and " + arrLowered[0][j]);
      if(arrLowered[1][i] == arrLowered[0][j]){
        console.log("good");
        good = 1;
        break;
      }
    }
    if (good == 0){
      return false;
    }
  }
  return true;
}

//mutation(["hello", "hey"]);
//mutation(["hello", "Hello"]);
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
mutation(["floor", "for"]);

// could have used arr_str1.indexOf(arr_str2[i])
// if the function returns -1 then the value of arr_str2[i] is not found in arr_str1.
