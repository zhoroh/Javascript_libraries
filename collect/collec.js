var _ = require('collect.js');
var array = [1,2,3]

console.log(_(array).all())

console.log(_({"firstname":"Bolarinwa Oreoluwa","Lastname":"Oreoluwa","Mentor": "Elisha"}).all())

console.log(_([1,3,3,7]).avg())

var info = [{
    'name': 'My story',
    'pages': 176,
  },
  {
    'name': 'Fantastic Beasts and Where to Find Them',
    'pages': 1096,
  },
];

console.log(_(info).avg('pages'))

//console.log((_([1,2,3,4,5,6,7,8,9]).chunk(5).all()))

var list = [1,2,3,4,5,6,7,8,9]
chunks = _(list).chunk(5)
console.log(chunks.all())

var list = [[1], [{},5,{}],['xoxo']]
collapsed = _(list).collapse()
console.log(collapsed.all())