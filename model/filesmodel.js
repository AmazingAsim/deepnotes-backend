let mongoose=require('mongoose');

let fileschema=mongoose.Schema({
    pdf:{type:String,require:true},
    branch:{type:String,require:true},
    subject:{type:String,required:true},
    year:{type:String,required:true}
   
})

let filemodel=mongoose.model('files',fileschema)

module.exports=filemodel;