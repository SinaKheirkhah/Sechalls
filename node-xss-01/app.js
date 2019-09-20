const express = require('express');
const app = express()

const { check, validationResult } = require('express-validator');


app.get('/', [
  check('email').isEmail(),
  check('email').isLength({max : 50}),
  check('email').isLength({min: 4})
], (req, res) => {
  
  const errors = validationResult(req)




  if (errors.isEmpty()) {

  	res.send('  <center style="color:red;"><h1>Hail Hydra</h1></center> <br><br> Wait for new instructions soldier ' + req.query.email );



  }else{

  	res.send('Email Validation Error');
  	
  }
  

});




app.listen(7171, ()=>{

	FgYellow = "\x1b[33m"
	console.log('XSS-01 Challenge started on address');
	console.log(FgYellow,'http://localhost:7171/?email=');
	//console.log(, 'I am cyan');  //cyan

});

