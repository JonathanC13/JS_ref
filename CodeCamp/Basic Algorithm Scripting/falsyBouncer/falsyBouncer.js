/*  Remove all falsy values from an array.
    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    @param: arr : array, values that are compared to falsy values
    @return: arr : array, the modified array with the falsy values removed.
*/
function bouncer(arr) {

  //var arrFalsy = [false, null, 0, "", undefined, NaN];
  var i;
  var arrLen = arr.length;
  //var arrFalseLen = arrFalsy.length;

  for(i = 0; i < arrLen; i ++){
    var a = new Boolean(arr[i]);
    //console.log(a);
    if(a == false){
      arr.splice(i, 1);
      i -= 1; // need to shift index
      arrLen -= 1;  // array length change
    }
  }

  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// the simple solution:
// return arr.filter(Boolean);
