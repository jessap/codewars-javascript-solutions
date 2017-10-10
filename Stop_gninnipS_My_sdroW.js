/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/
var assert = require('assert');
var spinword;
function spinWords(spinW){
  var wordList = spinW.split(" ");
  spinWord = '';
  var wordListTemp = [];
  for (var i = 0; i < wordList.length; i++){
    if (wordList[i].length > 4) {
    	wordList[i] = wordList[i].split("");
    	wordList[i] = wordList[i].reverse();
    	wordList[i] = wordList[i].join("");
    }
    wordListTemp = wordListTemp.concat(wordList[i]);
      spinWord = wordListTemp.join(" ");
  }
  return spinWord;
}
assert.equal(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
assert.equal(spinWords("This is a test"), "This is a test");
assert.equal(spinWords("This is another test"), "This is rehtona test");