function loadUsers(userIds, load, done){
	var users = []
	for(var i = 0; i < userIds.length; i++){
		users.push(setTImeout(0)
	}
	console.log(users)
	return users
}

module.exports = loadUsers


// //Official solution
// function loadUsers(userIds, load, done) {
//     var completed = 0
//     var users = []
//     userIds.forEach(function(id, index) {
//     	load(id, function(user) {
//         users[index] = user
//         if (++completed === userIds.length) return done(users)
//     	})
//     })
// }

module.exports = loadUsers