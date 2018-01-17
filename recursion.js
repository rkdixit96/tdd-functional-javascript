function reduce(arr, fn, initial){

}

function testing(){

	console.log("Basic functionality:", reduce([1,2,3], function(prev, curr, index, arr) {
      return prev + curr
    }, 0) === 6);

}

testing();