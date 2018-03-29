const authRouter = require('express').Router();
let userController = require('../Services/userController')
const passport = require('passport');
 
//auth login 
authRouter.get('/login',(req,res)=>{
    router.get("/users/getuser",userController.checkUser);
})

authRouter.get('/logout',(req,res)=>{
    res.send('logging out');

})
authRouter.get('/google',passport.authenticate('google',{
    scope:['profile']
}))
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('you reached the callback URI');
})
module.exports = authRouter;