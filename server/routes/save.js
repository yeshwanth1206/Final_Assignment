var express = require('express');
var From_data=require('../models/form_collection');
var mongoose=require('mongoose');
var router = express.Router();
var data;


router.post('/', function(req, res,next) {
	   
	   var savedata = new From_data(req.body);
	   // savedata.dropdown=req.body.dropdown;
	   // savedata.textname=req.body.textname;
	   // savedata.emailid=req.body.emailid;
	   // savedata.ph_num=req.body.ph_num;
	   // savedata.url_text=req.body.url_text;
	   // savedata.emp_code=req.body.emp_code;
	   // savedata.emp_dep=req.body.emp_dep;
	   // savedata.emp_des=req.body.emp_des;
	   // savedata.emp_skill=req.body.emp_skill;
	   // savedata.exp=req.body.exp;

	   savedata.save(function (err) {
	  	if (err) {
	  		return handleError(err);
	  	}
	  	else{
	  		console.log("Saved to database");
	  	}
	  });
     
	console.log(req.body);
    
});



router.get('/',function(req,res,next){
	console.log("INSIDE OF GETDATA IN SAVE");
	From_data.find({},function(err, data) {
		console.log("INSIDE OF GETTING DATA IN SAVE");
     if (err) {
	  		return handleError(err);
	  		console.log("ERROR");
	  	}
	  	else{
	  		console.log("INSIDE OF GETTING DATA IS SUCCEESS");
	  		console.log("Got from database");
	  		console.log(data);
	  		res.send(data);
	  	}
 });

});


module.exports = router;