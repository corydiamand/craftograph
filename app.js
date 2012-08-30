var zlib = require('zlib');
var fs = require('fs');


/*
fs.readFile('r.0.0.mca', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
*/

var x = zlib.createInflateRaw({'windowBits':8})


for (y in x){
	console.log(x);
}

console.log(x._offset);