function countWords(inputWords){
	return inputWords.reduce(function aggregate (allWords,word){
		if (word in allWords){
			allWords[word]++;
		}
		else{
			allWords[word]=1;
		}
		return allWords;
	},{});

}

function testing(){
	let result = countWords(["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"]);
	console.log(result);
	console.log("Basic functionality:",isEqual(result, {
		Apple: 2,
		Banana: 1,
		Durian: 3
	}));
	console.log("Empty input:", isEqual(countWords([]),{}));
	console.log("Negative test case:" ,!isEqual(result, {
		Apple: 2,
		Banana: 1,
		Durian: 4
	}));
}

function isEqual(obj1, obj2){
	let obj1Props = Object.getOwnPropertyNames(obj1);
	let obj2Props = Object.getOwnPropertyNames(obj2);

	if (obj1Props.length != obj2Props.length){
		return false;
	}

	for (let i = 0; i < obj1Props.length; i++){
		let prop = obj1Props[i];
		if (obj1[prop] != obj2[prop]){
			return false;
		}
	}

	return true;

}

testing();