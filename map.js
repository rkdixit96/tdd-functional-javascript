function doubleAll(numbers){
	return numbers.map(x => x * 2);

}

function testing(){
	console.log("Basic functionality:", isEqual(doubleAll([1,2,3]),[2,4,6]));
	console.log("Incorrect answer as incorrect:", !isEqual(doubleAll([1,2,3]),[2,5,6]));
	console.log("Empty array:", isEqual(doubleAll([]),[]));
}

function isEqual(arr1,arr2){
	for(let i = 0; i < arr1.length; i++){
		if(arr1[i] === arr2[i]){
			//pass
		}
		else{
			return false;
		}
	}
	return true;
}

testing()




module.exports = doubleAll