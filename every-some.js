function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(sUser => goodUsers.some(gUser=> gUser.id === sUser.id))

	}
}

function validator(goodUsers,submittedUsers){
	for(let i=0; i < submittedUsers.length;i++){

	}
}


function testing(){
	let goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    let result =checkUsersValid(goodUsers);	
    console.log('Basic funtionality:', result([
      { id: 2 },
      { id: 1 }
    ]) === true)
    console.log("Negative case:", result([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])=== false)}

testing()