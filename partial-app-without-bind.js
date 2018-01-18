var slice = [].slice //var was in boiler-plate

function logger(namespace){
	return function(sentence){
		//console.log(this)
		let args = [namespace].concat(slice.call(arguments));
		console.log.apply(null,args)
	}

}



function testing(){
	console.log("Basic functionality:", doesLogMessage(logger("info")("Hello I need","whatever"),"info Hello I need whatever"))
}

module.exports = logger

//testing()