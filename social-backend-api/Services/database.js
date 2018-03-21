var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'user',
  multipleStatements: true
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
let getAllUsers =  function(){
	return new Promise((success,reject)=>{
		connection.query("SELECT * FROM users",(err,data)=>{
			if(err){
				reject(err)}
			success(data)
			
		})
	}) 
};
let createUser =  function(name,email,username,password){
	return new Promise((success,reject)=>{
		connection.query(`INSERT INTO users (name,email,username,password) VALUES ('${name}','${email}','${username}','${password}')`,(err,data)=>{
			if(err){
				reject(err)}
			success(data)
			
		})
	}) 
};
let checkUser =  function(email_or_username,password){
	console.log('email_or_username==>',email_or_username);
	return new Promise((success,reject)=>{
		connection.query(`Select name from users where (email = '${email_or_username}' or username = '${email_or_username}')  and password = '${password}'`,(err,data)=>{
			if(err){
				reject(err)}
			success(data)
		});
	});
};

let userAlreadyExists =  function(username){
	return new Promise((success,reject)=>{
		connection.query(`Select name from users where username = '${username}'`,(err,data)=>{
			if(err){
				reject(err)}
			success(data)
			
		})
	}) 
};


module.exports = {getAllUsers,createUser,checkUser, userAlreadyExists};