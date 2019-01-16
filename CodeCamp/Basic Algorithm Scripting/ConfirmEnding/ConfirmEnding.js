/*  Check if a string (first argument, str) ends with the given target string (second argument, target).
    @param: str : string, original string
    @param: target : string, substring to compare to the end of the original string.
    @return: confirmed : boolean, if the targer exactly matches the ending of the oringal string return true, else return false.
*/
function confirmEnding(str, target) {
  var confirmed = false;

  var targetLen = target.length;
  var start = (str.length - targetLen);

  // compare the right number of characters in the str to the target by slicing
  // The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
  var strSplice = str.slice(start, str.length);

  // == is equal value
  // === is equal value and equal type
  if(target == strSplice){
    confirmed = true;
  }

  return confirmed;
}

console.log(confirmEnding("Bastian", "al"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Congratulation", "on"));
