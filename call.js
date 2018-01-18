function duckCount(){
	//call is used to get access to functions/objects of other objects
	//console.log(arguments)
	var arr = [].slice.call(arguments);
	//console.log(arr);
	//console.log(typeof arr)
	a = {}
	return arr.reduce(function counter (nDucks, obj){
		if(a.hasOwnProperty.call(obj,'quack')){
			nDucks += 1;
		}
		return nDucks;
	},0);

}

function testing(){

	console.log("Basic functionality:", duckCount({quack: true}) === 1);
	console.log("Negative case:", duckCount({quack:true},{quack:true}) != 1);
	console.log("No parameter that has property:", duckCount({notquack: false}) === 0);
	console.log("Function has no parameters:",duckCount()===0);
}

testing();
