const filemodel = require("../model/filesmodel");




let showfiles=()=>{
    return filemodel.find();
}

let findbybranch=(branchname)=>{
    return filemodel.find({branch:branchname})
}

let findbysubject=(subjectname,branchname)=>{
    return filemodel.findOne({branch:branchname,subject:subjectname})
}




let addfile= async (file)=>{
   console.log('repo addfile executed');
  

   return filemodel.insertMany(file)
}

module.exports={showfiles,addfile,findbybranch,findbysubject}