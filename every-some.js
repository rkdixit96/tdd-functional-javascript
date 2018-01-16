function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){

	}
}

function validator(goodUsers,submittedUsers){
	for(let i=0; i < submittedUsers.length;i++){

	}
}


function testing(){
	var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ];

    let result =checkUsersValid(goodUsers);
	console.log("Basic funtionality:", result([
      { id: 2 },
      { id: 1 }
    ]) === true);
}

testing();
