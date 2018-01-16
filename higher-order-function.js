let count = 0;

function repeat(operation, num){
	for(let i = 0; i < num; i++){
		operation();
		counter();
	}
	
}

function counter(){
	count+=1;
}

function resetCounter(){
	count = 0
}

function testing(){
	let num = 0;
	repeat(operation,num);
	console.log("Basic functionality:",count === num);
	resetCounter()
	console.log("Checking for 0 length:",count === num);
}

function operation(){
	//pass
}

testing();