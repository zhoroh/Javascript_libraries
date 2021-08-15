var _ = require("underscore");
var numbers = [1,2,3,4];
var listOfNumbers = '';
_.each(numbers,function(x){ listOfNumbers +=x + '    '});

console.log(listOfNumbers);

//console.log(_.each([1,2,3]));
//.each([1,2,3], alert);
//_.each({one: 1, two: 2, three: 3}, alert);
console.log(_.map([1,2,3], function(x){ return x*3}))


console.log(_.map([[1, 2], [3, 4]], _.first));
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);

console.log(sum);
var sum = _.reduce([2, 8, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum);