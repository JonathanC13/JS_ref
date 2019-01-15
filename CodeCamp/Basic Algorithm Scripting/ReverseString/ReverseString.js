/*  Reverse the provided string.
    @param: str : string, original
    @return: revStr : string, the input string reversed.
*/

function reverseString(str) {

  var length = str.length - 1;
  var revStr = "";

  var i;
  for(i = length; i >= 0; i--){
    revStr += str[i];
  }

  return revStr;
}

console.log(reverseString("hello"));
