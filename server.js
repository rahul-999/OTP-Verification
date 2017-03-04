
var express = require('express');
var	app = express();
var	bodyParser = require('body-parser');
var	path = require("path");
var speakeasy = require('speakeasy');
//otp generation time base
var secret;
var token;

<<<<<<< HEAD
//message sending api(uid_key,pass_key)
var client=require('twilio')('AC97068166a5fc8b48fc6335d5c682d7ac','***************************');
=======
//message sending api twilio u_id and auth_key 
var client=require('twilio')('U_id','Auth_key');
>>>>>>> origin/master
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); 


//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));
//console.log("generated token:"+token);

//tell express what to do when the /form route is requested
app.post('/',function(req, res){
	res.setHeader('Content-Type', 'application/json');

	secret = speakeasy.generateSecret({length: 6});
 	token = speakeasy.totp({
 		 secret: secret.base32,
 		 encoding: 'base32',
 		 step:60
	});

	client.messages.create({
		from:'+12566335213',
<<<<<<< HEAD
		//here you can entered only register number beacause i on't have twilio paid api
=======
>>>>>>> origin/master
		to:req.body.numbers,
		body:"Your One Time Password is "+ token 
	},function(err,message){
		if(err){
			console.error(err.message);
		}
	});
	//debugging output for the terminal
	console.log('Enterd Mobile Number:' + req.body.numbers );
	console.log("generated token:"+token);
	console.log(typeof token);
});

app.post('/verify',function(req,res){
	res.setHeader('Content-Type', 'application/json');
	
	if(req.body.otp!==" "){
		
		console.log('Enterd OTP:' + req.body.otp );
		
		
		if(token!==req.body.otp){
			console.log("otp not varified");
			res.end(JSON.stringify('Invalid otp entered...'));
			
		}else{
			console.log("otp varified");
			res.end(JSON.stringify('Mobile number verified...'));
			
		}

	}
	
});

app.listen(3000, function () {
  console.log('Server is running on  http://localhost:3000');
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/master
