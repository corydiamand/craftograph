var zlib = require('zlib');
var fs = require('fs');


var input = '.................................';
zlib.inflate(input, function(err, buffer) {
  if (!err) {
  	for (x in buffer){
  	//	console.log(x+" "+buffer[x])
  	//	console.log(x);
  	}
    console.log(buffer.parent.slice(0,5))
  }
  else console.log(err)
	 
	var thing; 
 	for (i = 0; i <= buffer.parent.length; i++){
 	thing+=buffer.parent[i];
}
	console.log(thing);
});



var buffer = new Buffer('eJzT0yMAAGTvBe8=', 'base64');
zlib.unzip(buffer, function(err, buffer) {
  if (!err) {
    console.log(buffer.toString());
  }
});




