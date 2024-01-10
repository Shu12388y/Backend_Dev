// todo model user model

const mongoose = require('mongoose');

// define the scheme

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    
    }
    

    
},{
    timeStamps:true
});








// export the model
export const User= mongoose.model('User', userSchema);


// the model name is changed User to users