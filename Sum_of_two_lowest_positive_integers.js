/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function(a, b){return a - b});
  return(numbers[0]+numbers[1]);
};


var assert = require('assert');
assert.equal(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
assert.equal(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
assert.equal(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
assert.equal(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
assert.equal(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");