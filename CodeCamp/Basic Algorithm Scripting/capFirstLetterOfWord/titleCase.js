/*  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
    @param: str : string, Sentence with varying capitalized letters
    @return: newSent : string, Sentence with only the first letter of every word capitalized
*/

function titleCase(str) {

  // split the string into an array of words split by space
  var arrWords = str.split(" ");
  var arr_newStr = [];

  var arrWordsLen = arrWords.length;
  var i;
  for (i = 0; i < arrWordsLen; i ++){

    var allLowered = arrWords[i].toLowerCase();
    //console.log(allLowered);

    var capFirst = allLowered[0].toUpperCase();

    // capital first letter with rest lower
    var res = allLowered.replace(allLowered[0], capFirst);

    arr_newStr.push(res);
  }

  // re-join string array into a sentence
  var newSent = arr_newStr.join(" ");
  return newSent;
}

var capped = titleCase("I'm a little tea pot");
console.log(capped);

var capped1 = titleCase("sHoRt AnD sToUt");
console.log(capped1);


// note for strings
// In JavaScript, String values are immutable, which means that they cannot be altered once created.
// The only way to change myStr would be to assign it with a new string
