var _ = require('lodash'); // initiallizing the lodash library

var name = "Bolarinwa Oreoluwa"; //creating a variable

if(_.isString(name)){
    console.log(name);
}
else{
    console.log("Not a string");
}

var _array_ = ["Elisha",'Oreoluwa',14,18];
if (_.isArray(_array_)){
    console.log(_array_);
}
else{
    console.log("this is not an array");
}

console.log(_.chunk(_array_,2)); 

console.log(_.compact([0,1, false,2,NaN,null,'',3]));

var array_ = [1];
var other = _.concat(array_,2,[3],[[4]]);
console.log(other);