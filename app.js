var zlib = require('zlib');
var fs = require('fs');


fd = 'region/r.-1.-1.mca'

//function to read the Header of a map file and analyze locations
function readHeader(fd){



//using nodejs file system to pull map file and then read it. 
//This will change later on if web interface is built.
	fs.readFile(fd,function(error,data){
	
		
		//declare string to hold the location data and **array to hold locations?
    	
    	
    	locationHeader = []
    	
    	
    	//loop puts together string filled with header data
    	//length should be 4095
   
		for(x = 0; x<=4095; x++){
		
				locationHeader.push(data[x])
		}
		
		bread = data.slice(0,400)
		console.log(bread);
		
	

	});
	

}

readHeader(fd)

