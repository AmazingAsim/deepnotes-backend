let express=require('express');
let filecontroller=require('../controller/filescontroller')
let multer=require('../middleware/multer')

let filerouter=express.Router();

filerouter.get('/files',filecontroller.getfiles)
filerouter.get('/find/:branch',filecontroller.findbybranch);
filerouter.get('/findfile/:subject/:branch',filecontroller.findbysubject)
filerouter.post('/files',multer('files').single('pdfdocs'),filecontroller.addfile);



module.exports=filerouter;