const filerepo=require('../repo/filesrepo');
const Filemodel=require('../model/filesmodel')

let getfiles=async (req,res)=>{
    try{
        
        let result=await filerepo.showfiles();
        console.log(result)
        res.json(result)
    
    }
    catch(err){
        console.log(err)
        res.send(err);
    }
      
    }

    let findbybranch=async (req,res)=>{
        let branch=req.params.branch
        try{
            
            let result=await filerepo.findbybranch(branch);
            console.log(result)
            res.json(result)
        
        }
        catch(err){
            console.log(err)
            res.send(err);
        }
          
        }


        let findbysubject=async (req,res)=>{
            let subject=req.params.subject;
            let branch=req.params.branch;
         
            try{
                
                let result=await filerepo.findbysubject(subject,branch);
                console.log(result)
                res.sendFile(result.pdf,{root:'./public/uploads/files'})
            
            }
            catch(err){
                console.log(err)
                res.send(err);
            }
              
            }
    
    let addfile= async (req,res,next)=>{
       
       
         
        try{
               console.log('try initiated');
                    let file= Filemodel()
                    file.branch=req.body.branch;
                    file.pdf=req.file.filename;
                    file.subject=req.body.subject;
                    file.year=req.body.year;


            
              let result=await filerepo.addfile(file);
              console.log(result)
              res.send(result)
            
             
            
        }
        catch(err){
             res.send('catch error'+err)
             console.log('catch error in control'+err);
        }
    }

    module.exports={addfile,getfiles,findbybranch,findbysubject}