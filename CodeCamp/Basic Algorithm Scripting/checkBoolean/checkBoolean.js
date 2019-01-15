/*  Check if a value is classified as a boolean primitive. Return true or false.
    @param: bool : any, input that will be checked
    @return: checkBool : boolean, if the input is of type boolean, true if yes ; false if no.
*/

function booWho(bool) {

  var checkBool = false;

  if ((typeof bool) == 'boolean'){
    checkBool = true;
  }

  return checkBool;
}

booWho(null);
booWho([].slice);
booWho(false);
