let count = 0;

function repeat(operation, num){
	if (num > 0){
		for(let i = 0; i < num; i++){
			operation();
			counter();
		}
	}
	else {
		//pass
	}
	
	
}

function counter(){
	count+=1;
}

function resetCounter(){
	count = 0
}

function testing(){
	let num = 5;
	repeat(operation,num);
	console.log("Basic functionality:",count === num);
	resetCounter()
	num = 0;
	console.log("Checking for num 0:",count === num);
	resetCounter();
	num = -1;
	console.log("Checking for negative num:",count === 0);
}

function operation(){
	//pass
}

testing();