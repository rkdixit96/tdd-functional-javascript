var slice = [].slice //var was in boiler-plate

function logger(namespace){
	return function(sentence){
		//console.log(this)
		let args = [namespace].concat(slice.call(arguments));
		console.log.apply(null,args)
	}

}



console.log("Return type of function:", typeof logger("info")==="function")

module.exports = logger

//testing()