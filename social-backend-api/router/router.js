const express = require('express')
const multer = require('multer')
const authRoutes = require('./auth-routes');
//let uploadFile = require('../services/uploadFile')
const passportSetup = require('../config/passport-setup')
let userController = require('../Services/userController')
//let getFile = require('../services/getFile')

let router = express.Router()
//let upload = multer({dest:__dirname+"/../../uploads"})
 app.use('/auth',authRoutes)
//router.post("/upload",upload.single("pdffile"),uploadFile)
router.get("/users",userController.showUsers);

router.post("/users/create",userController.createUser);
//router.get("/users/getuser",userController.checkUser);
router.get("/users/userAlreadyExists",userController.userAlreadyExists);

module.exports =  router;