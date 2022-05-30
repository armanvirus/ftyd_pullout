const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const questionSchema = new Schema({
    question:{
        type:String,
        required:true
    },
    options:[],
    answer:{
        type:String,
        required:true
    },
    level:{
        type:String,
    },
    category:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Questions", questionSchema);