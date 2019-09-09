const express = require("express");
const router = express.Router();
const ImgController = require("./controller");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var cpUpload = upload.fields([{ imageName: 'image-name', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])

// get images detailes 

router.get('/getImage', ImgController.getImage)

//add new image

router.post('/addImage',cpUpload, ImgController.addImage)

// remove e

router.delete('/removeImage/:id', ImgController.deleteImage)




module.exports = router;