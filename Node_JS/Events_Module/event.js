//? event module
//? This module is used to listen events

const event=require("events")  //? it initalise class

//? let make a user login logic

class Auth extends event{
    register(username){
        console.log(`Hello ${username} you have register`)
        //? we want to send email if the user register
        this.emit("register",username)

    }
}


const user1= new Auth()  //? create a new instance



//? we have define the event to take place
//? we add more event in this
user1.on("register",(data)=>{
    console.log("sending the email to "+data)
})


user1.register("kunal")
