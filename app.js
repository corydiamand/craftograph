var zlib = require('zlib');
var fs = require('fs');

fd = 'r.0.-1.mca'

fs.readFile(fd,function(e,b){
     var d;
	for(x = 0; x<=b.length-1; x++){
	d += b[x].toString()
	}
	
	console.log(d);
	//console.log(b.length)
})
//32760




