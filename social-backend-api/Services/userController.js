let database = require('./database');

let showUsers =  async function(req,res){
	res.header("Content-type","Application/json")
	try{	
		let result = await database.getAllUsers();
		if(result){
			res.json({
				status:"OK",
				result:result
			});
		}
	}catch(err){
		res.json({
			status:"ERROR",
			error:err
		});
	}
}
let createUser =  async function(req,res){
	res.header("Content-type","Application/json")
	
	try{	
		
		let result = await database.createUser(req.query['name'],
			req.query['email'],
			req.query['username'],
			req.query['password'])
		if(result){
			res.json({
				status:"OK",
				result:result
			});
		}
	}catch(err){
		res.json({
			status:"ERROR",
			error:err
		});
	}
}
let checkUser =  async function(req,res){
	res.header("Content-type","Application/json")
	try{	
		let result = await database.checkUser(req.query['email_or_username'],
			req.query['password']
			);
			var newObj = Object.assign({}, ...result)
			console.log("database",newObj)
		if(result){
			res.json({
				status:"OK",
				result:result
			});
		}
	}catch(err){
		res.json({
			status:"ERROR",
			error:err
		});
	}
}
let userAlreadyExists =  async function(req,res){
	res.header("Content-type","Application/json")
	try{	
		let result = await database.userAlreadyExists(req.query['username']);
			var newObj = Object.assign({}, ...result)
			console.log("database",newObj)
		if(result){
			res.json({
				status:"OK",
				result:result
			});
		}
	}catch(err){
		res.json({
			status:"ERROR",
			error:err
		});
	}
}


module.exports = {showUsers,createUser,checkUser,userAlreadyExists};