/*  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
    @param: str : string, string to be repeated
    @param: num : number, number of times the string is to be repeated.
    @return: repeatedStr : string, the new repeated string.
*/
function repeatStringNumTimes(str, num) {

  var repeatedStr = "";

  if (num < 0){
    repeatedStr = "";
  } else {
    var i;
    for (i = 0; i < num; i ++){
      repeatedStr += str;
    }
  }

  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 8));
