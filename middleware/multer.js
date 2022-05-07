const path = require("path");
const multer = require("multer");
module.exports = folderName => {
    // return multer   ({
    //     filename: function (req, file, cb) {
    //         cb(null, req.body.subject+req.body.branch + '.pdf') //Appending .pdf
    //       },
    //     fileFilter : (req,file,cb)=>{
            
    //         const ext = path.extname(file.originalname);
    //         if(
    //             ext != ".pdf"
    //         ){
    //             return cb(new Error("Only PDFs are allowed"));
    //         }
    //         cb(null,true);
    //     },
    //     dest : `public/uploads/${folderName}/`
      
    // });

    return multer({storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'public/uploads/files')
        },
        filename: function (req, file, cb) {
         
          cb(null, file.fieldname +req.body.subject+req.body.branch+ '.pdf')
        }
      })})
};