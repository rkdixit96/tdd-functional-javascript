function reduce(arr, fn, initial){
	if(!arr.length){
		return initial
	}
	initial = fn(initial,arr[0]);
	tail = arr.slice(1);
	return reduce(tail,fn,initial)
}

function testing(){
	function example(prev, curr, index, arr) {
      return prev + curr;
    }

    function empty(arg1,arg2,arg3,arg4){
    	//pass
    }

	console.log("Basic functionality:", reduce([1,2,3], example, 0) === 6);
    console.log("Array with array input:", reduce([],example,0) === 0);
    console.log("Callback funtion returns nothing:", reduce([1,2,3],empty,0) === undefined);

}

testing();