function upperCaser(input) {
	if(typeof input === "string"){
		return input.toUpperCase();
	}
	else{
		//pass
	}
	
}


function testing(){
	console.log("Basic functionality:", upperCaser("hello")==="HELLO");
	console.log("Wrong input type:", upperCaser(1)===null);
}

testing()