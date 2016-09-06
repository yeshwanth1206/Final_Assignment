var React=require("react");
console.log("Inside Left Panel");
var form_view=React.createClass({


	render:function(){
		return(

				<div>
				  <table className="table table-responsive table-bordered table-hover col-md-12 test ">
					<tbody>
					  <tr>

							<td className="col-md-4">{this.props.docId}</td>
							<td className="col-md-4">{this.props.dropdown1}</td>
							<td className="col-md-4">{this.props.textname1}</td>
							<td className="col-md-4">{this.props.emailid1}</td>

					  </tr>
					</tbody>
				  </table>
				</div>
		);
	}
});

module.exports=form_view;