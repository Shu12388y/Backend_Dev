const auth=function(userName){
    console.log(`User is ${userName}`)
}


const login=function(username,password){
    console.log(`user is ${username} and password is ${password}`)
}

module.exports={
    auth,
    login
}