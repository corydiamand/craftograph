var zlib = require('zlib');
var fs = require('fs');


fd = 'region/r.-1.-1.mca'

//function to read the Header of a map file and analyze locations
function readHeader(fd){



//using nodejs file system to pull map file and then read it. 
//This will change later on if web interface is built.
	fs.readFile(fd,function(e,b){
	
		
		//declare string to hold the location data and **array to hold locations?
    	var locationString;
    	var locationArray = [];
    	
    	
    	
    	//loop puts together string filled with header data
		for(x = 0; x<=4095; x++){
		
				locationString += b[x].toString(2)
		}
		
		
		/*loop splits bits into bytes, and bytes into groups of four, then if bytes aren't all 0, 
		it maps the location of the chunks based on the specification here: http://www.minecraftwiki.net/wiki/Region_file_format */
		x = 0;
		byteCount = 0;
		while( x<= locationString.length){
			
			var bytes = ''
			while (bytes.length < 31){
				
			
				var byte ='';
				while (byte.length <= 7){
					byte+=locationString[x]
					x++;
				}
				
				bytes+=byte;
				byteCount++;
			}
//			console.log(bytes);
//			console.log(byteCount);
		} 
//	console.log("It's dangerous to go alone. Take this! c::|=====>");
	console.log(locationString);
	console.log(locationString.length);
	

	});
	

}

readHeader(fd)

