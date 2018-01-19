function logger(namespace){
	return function(sentence){
		//console.log(this)
		let args = [this.toString()].concat([].slice.call(arguments));
		console.log.apply(null,args);
	}.bind(namespace)

}


console.log("Return type of function:", typeof logger("info")==="function")

module.exports = logger;