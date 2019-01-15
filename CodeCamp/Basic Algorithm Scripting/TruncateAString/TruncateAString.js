/*  Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. Returning the number, "num", of characters starting from the beginning of the string, "str".
    @param: str : string, original
    @param: num : number, number of characters to include
    @return: truncatedStr : string, the new string truncated.
*/

function truncateString(str, num) {
  var truncatedStr = "";

  truncatedStr += str.slice(0, num);
  if(str.length > num){
    truncatedStr += "...";
  }

  return truncatedStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
