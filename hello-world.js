function upperCaser(input) {
	if(typeof input === "string"){
		return input.toUpperCase();
	}
	else{
		return null;
	}
	
}


function testing(){
	console.log("Basic functionality:", upperCaser("hello")==="HELLO");
	console.log("Wrong input type:", upperCaser(1)===null);
}

testing()