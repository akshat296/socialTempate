const express = require('express')
const multer = require('multer')

//let uploadFile = require('../services/uploadFile')
let userController = require('../Services/usersController')
//let getFile = require('../services/getFile')

let router = express.Router()
//let upload = multer({dest:__dirname+"/../../uploads"})

//router.post("/upload",upload.single("pdffile"),uploadFile)
router.get("/users",userController.showUsers);
router.post("/users/create",userController.createUser);
router.get("/users/getuser",userController.checkUser);
router.get("/users/userAlreadyExists",userController.userAlreadyExists);

module.exports =  router;