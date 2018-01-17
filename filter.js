function getShortMessages(messages){
	return messages.filter(function lessThanFifty(mess){
		return mess.message.length < 50;
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
	console.log("Basic functionality:", checkLength(getShortMessages(messages),50));

	messages = [{"message": "adfhhsadkjfhsakjdfhasjkdfhlajksdfhlkashdfkjdksljafhjkkadsjhfkajhdlfkjhdsafjiadf"}]
	console.log("No message less than fifty:", checkLength(getShortMessages(messages),50));
}

testing();