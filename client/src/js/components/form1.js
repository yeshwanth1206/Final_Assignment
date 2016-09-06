var React=require('react');
var form_view=require('./form_view');
var form1=React.createClass({
	getInitialState:function(){
  		return({dropdown:"",name:"",email:"",phone:"",giturl:"",empcode:"",empdept:"",empdesig:"",skills:"",exp:"",getData:[]});
    },

    handleDropdown:function(event){
    	this.setState({dropdown:event.target.value})
    },	

    handleName:function(event){
    	this.setState({name:event.target.value})
    },	

    handleEmail:function(event){
    	this.setState({email:event.target.value})
    },	
    handlePhone:function(event){
    	this.setState({phone:event.target.value})
    },
    handleGitUrl:function(event){
    	this.setState({giturl:event.target.value})
    },
    handleEmpCode:function(event){
    	this.setState({empcode:event.target.value})
    },
    handleEmpDept:function(event){
    	this.setState({empdept:event.target.value})
    },
    handleEmpDesig:function(event){
    	this.setState({empdesig:event.target.value})
    },    
    handleSkills:function(event){
    	this.setState({skills:event.target.value})
    },
    handleExp:function(event){
    	this.setState({exp:event.target.value})
    },

    componentDidMount:function(){
    	//this.getData();
  	},


	postData:function()
	  {

	    $.ajax({
	          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
	          url: '/save',
	          dataType: 'json',
	          contentType: "application/json",
	          type: 'POST',
	          data: JSON.stringify({'dropdown': this.state.dropdown,'inputname':this.state.name, 'inputemail':this.state.email, 'inputphone':this.state.phone,inputgiturl:this.state.giturl,inputempcode:this.state.empcode,inputempdept:this.state.empdept,inputempdesig:this.state.empdesig,inputskills:this.state.skills,inputexp:this.state.exp}),
	          success: function(data)
	          {
	            console.log("Success");
	          }.bind(this),

	          error: function(xhr, status, err) {
	            console.error("Error.."+err.toString());
	          }.bind(this)
	        });

	    this.getData();

	  },

	  getData:function()
	  {	

	    $.ajax({
	          //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
	          url: '/getData',
	          dataType: 'json',
	          type: 'GET',

	          success: function(data)
	          {
	            console.log("Success");
	            this.setState({getData:data});
	          }.bind(this),

	          error: function(xhr, status, err) {
	            console.error("Error.."+err.toString());
	          }.bind(this)
	        });

	  },






  render:function(){
  	var getdata=this.state.getData.map(function(data) {
      		console.log("Inside Form Submission.js render inside map");
      		return(
        		<form_view dropdown1={data.dropdown} textname1={data.textname} emailid1={data.emailid} docId={data._id} />
      		);
    	});
    return(
    	
  <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
			<h3 className="text-center text-success">
				Form Submission
			</h3>
			<div className="row">
				<div className="col-md-2">
				</div>

				<div className="col-md-10">
				
					<form action="/save" method="POST" className="form-horizontal" role="form">

						<div className="form-group">
							<label for="textname" className="col-sm-3 control-label">
								WAVE :
							</label>
							<div className="col-sm-6">
								<select name="dropdown">
										  <option type="text" value="Wave1">Wave1</option>
										  <option type="text" value="Wave2">Wave2</option>
										  <option type="text" value="Wave3">Wave3</option>
										  <option type="text" value="Wave4">Wave4</option>
										  <option type="text" value="Wave5">Wave5</option>
										  <option type="text" value="Wave6">Wave6</option>
								</select>
							</div>
						</div>

					
						<div className="form-group">
							 
							<label for="textname" className="col-sm-3 control-label">
								Name :
							</label>
							<div className="col-sm-6">
								<input type="text" value={this.state.name} onChange={this.handleName} className="form-control" id="textname" name="textname"/>
							</div>
						</div>

						

						<div className="form-group">
							 
							<label for="emailid" className="col-sm-3 control-label">
								Email :
							</label>
							<div className="col-sm-6">
								<input type="email" value={this.state.email} onChange={this.handleEmail} className="form-control" id="emailid" name="emailid" />
							</div>
						</div>

						<div className="form-group">
							 
							<label for="ph_num" className="col-sm-3 control-label" >
								Phone no:
							</label>
							<div className="col-sm-6">
								<input type="text" value={this.state.phone} onChange={this.handlePhone} className="form-control" id="ph_num" name="ph_num"/>
							</div>
						</div>
						
						

						<div className="form-group">
							 
							<label for="url_text" className="col-sm-3 control-label">
								Git URL:
							</label>
							<div className="col-sm-6">
								<input type="text" value={this.state.giturl} onChange={this.handleGitUrl} className="form-control" id="url_text" name="url_text"/>
							</div>
						</div>

						<div className="form-group">
							 
							<label for="emp_code" className="col-sm-3 control-label">
								Emp Code :
							</label>
							<div className="col-sm-6">
								<input type="text" value={this.state.empcode} onChange={this.handleEmpCode} className="form-control" id="emp_code" name="emp_code" />
							</div>
						</div>

						<div className="form-group">
							 
							<label for="emp_dep" className="col-sm-3 control-label">
								Emp Department :
							</label>
							<div className="col-sm-6">
								<input type="text" value={this.state.empdept} onChange={this.handleEmpDept} className="form-control" id="emp_dep" name="emp_dep"/>
							</div>
						</div>

						<div className="form-group">
							 
							<label for="emp_des"  className="col-sm-3 control-label">
								Emp Destination :
							</label>
							<div className="col-sm-6">
								<input type="text" value={this.state.empdesig} onChange={this.handleEmpDesig} className="form-control" id="emp_des" name="emp_des"/>
							</div>
						</div>

						<div className="form-group">
							 
							<label for="emp_skill" className="col-sm-3 control-label">
								Emp Skills :
							</label>
							<div className="col-sm-6">
								<textarea type="text" value={this.state.skills} onChange={this.handleSkills} className="form-control" id="emp_skill" rows="3" name="emp_skill"/>
							</div>
						</div>

						<div className="form-group">
							 
							<label for="exp" className="col-sm-3 control-label">
								Experiance :
							</label>
							<div className="col-sm-6">
								<input type="number" value={this.state.exp} onChange={this.handleExp} className="form-control" id="exp" name="exp"/>
							</div>
						</div>

							<center>
								<button type="button" className="btn btn-primary" onClick={this.postData} value="submit">
									Submit
								</button>
							
							</center>

					</form>
                   
                   	<div className="col-md-2">
					</div>

				</div>
				<div className="row">
					<div className="col-md-2">
				        </div>
				            <div className="col-md-8">
				            {getdata}
				            </div>
				            <div className="col-md-2">
				            </div>

			// 	</div>
			// </div>
		</div>
	</div>
</div>
  
);
}
})
module.exports=form1;
