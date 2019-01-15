/*  Return the length of the longest word in the provided sentence.
    @param: str: string, sentence
    @return: longestLength : number, the length of the longest word in the input sentence.
*/
function findLongestWordLength(str) {

  // Split sentence to an array of strings split by spaces.
  var arr_Str = str.split(" ");
  var longestStr = "";

  // iterate array and determine the longest string
  arr_Str.forEach(function(element) {
    if(element.length > longestStr.length){
      longestStr = element;
    }
  });

  return longestStr.length;
}

var longestLength = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(longestLength);
