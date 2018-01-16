function getShortMessages(messages){
	return messages.filter(function lessThanFifty(mess){
		return true;
	}).map(mess => mess.message); 

}

function checkLength(arr,len){
	for(let i=0; i < arr.length; i++){
		if(arr[i].length > len){
			return false;
		}
	}
	return true;
}

function testing(){
	messages = [{"message": "adfhhsadkjfhsakjdfhasjkdfhlajksdfhlkashdfkjdksljafhjkkadsjhfkajhdlfkjhdsafjiadf"},{"message":"kjdlashfajkf"}]
	console.log("Basic functionality:", checkLength(getShortMessages(messages),50))
}

testing();