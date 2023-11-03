const mongoose = require('mongoose');
async function connect (){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/F8');
        console.log("thanh cong ")
    }  
    catch{
        console.log("that bai  ")
    }
}


module.exports = {connect}
