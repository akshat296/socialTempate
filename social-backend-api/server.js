const express = require('express')
const multer = require('multer')
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local'),Strategy;
const expressValidator = require('express-validator');

let router = require('./router/router');

const PORT = process.env.PORT || 9001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());

app.use(session({
	secret:'secret',
	saveUninitialized:true,
	resave:true
}));


app.use("/",(req,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	next();
});

app.use("/",router)
app.listen(PORT,(err)=>{
	if(err)
		console.log(err);
	console.log(`app is listening on port ${PORT}`);
})
