import mongoose from "mongoose";

const itemSchema=new mongoose.Schema({
    id: {
        type: 'string',
        require: true,
    },
    Name: {
        type: 'string',
        require: true,
    },
   
   email:{
        type:'string',
        require: true,
    },
    password:{
        
        type:'string',
        require: true,
    },
    ResetKey:{
        type:'string',
        require: true,
    }
});
     
const UserSchema=new mongoose.Schema({
    id: {
        type: 'string',
        require: true,
    },
    Name: {
        type: 'string',
        require: true,
    },
   
   email:{
        type:'string',
        require: true,
    },
    password:{
        
        type:'string',
        require: true,
    },
    ResetKey:{
        type:'string',
        require: true,
    }
});

export const AppUserModel = mongoose.model('users ',UserSchema);
 export const item = mongoose.model('ItemModel ',itemSchema);