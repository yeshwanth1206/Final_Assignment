var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var form_collection=new Schema({
	dropdown:String,
	textname: String,
	emailid: String,
	ph_num: String,
	url_text: String,
	emp_code: String,
	emp_dep: String,
	emp_des: String,
	emp_skill: String,
	exp: String,
	
})
module.exports=mongoose.model('From_data',form_collection)