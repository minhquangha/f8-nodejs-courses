const mongoose = require('mongoose');

async function connect (){
    try{
        await mongoose.connect('mongodb+srv://db-test:123@testf8.8ou62xm.mongodb.net/?retryWrites=true&w=majority&appName=TESTF8');
        console.log('successfully');
    }catch(err){
        console.log(err);
    }
}
module.exports={connect};