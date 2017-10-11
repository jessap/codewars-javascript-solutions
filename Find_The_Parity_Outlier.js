/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160
*/

function findOutlier(integers){
  var even = [];
  var odd = [];
  for (var i=0; i<integers.length; i++){
    if (integers[i]%2 ==0 || integers[i]==0){
      even = even.concat(integers[i]);
    } else {
      odd = odd.concat(integers[i]);
    }
  }
    if (even.length == 1){
    return even[0];
    } else {
    return odd[0];
    }
}

//Test
var assert = require('assert');
assert.equal(findOutlier([0, 1, 2]), 1);
assert.equal(findOutlier([1, 2, 3]), 2);
assert.equal(findOutlier([2,6,8,10,3]), 3);
assert.equal(findOutlier([0,0,3,0,0]), 3);
assert.equal(findOutlier([1,1,0,1,1]), 0);