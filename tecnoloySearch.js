const users = [
    { name: 'Erik', tecnology: ['HTML', 'CSS']},
    { name: 'Samuel', tecnology: ['JavaScript', 'CSS', 'HTML', 'Node.js']},
    { name: 'Patricia', tecnology: ['HTML', 'Node.js']}
]

function searchUserCSS(user) {
    for (let i = 0; i < user.tecnology.length; i++){
        if (user.tecnology[i] == 'CSS'){
            return true
        }
    }
}

for (let i = 0; i < users.length; i++) {
    const userWorkingWithCSS = searchUserCSS(users[i])
    if(userWorkingWithCSS) {
      console.log(`The user ${users[i].name} working with CSS`)
    }
}
