var React=require('react');
//var ViewModel=require("./ViewModel")
var Home=React.createClass({

//   getInitialState:function(){
//     return({ getDat:[], updateData:[], deleteData:[]});
//   },

//    getData:function()
//   {
//     $.ajax({
//           //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
//           url: '/getData',
//           dataType: 'json',
//           type: 'GET',
//           success: function(data)
//           {
//             console.log("INSIDE OF GETDATA IN HOME");
//             console.log("Success");
//             this.setState({getDat:data});
//           }.bind(this),
          
//           error: function(xhr, status, err) {
//             console.log("INSIDE OF GET DATA IN ERRORR");
//             console.error("Error.."+err.toString());
//           }.bind(this)
//         });
//   },

//   updateData:function()
//   {
//     $.ajax({
//           //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
//           url: '/updateData',
//           dataType: 'text',
//           type: 'PUT',
//           success: function(data)
//           {
//             console.log("Success");
//             this.setState({updateData:data});
//           }.bind(this),

//           error: function(xhr, status, err) {
//             console.error("Error.."+err.toString());
//           }.bind(this)
//         });
//   },

//   deleteData:function()
//   {
//     $.ajax({
//           //url: 'https://www.googleapis.com/gmail/v1/users/me/messages/send?key={AIzaSyBL7U0B65m6UmCcOTQ6SWOwHVNz0TCZOEk}',
//           url: '/deleteData',
//           dataType: 'text',
//           type: 'DELETE',
//           success: function(data)
//           {
//             console.log("Success");
//             this.setState({deleteData:data});
//           }.bind(this),

//           error: function(xhr, status, err) {
//             console.error("Error.."+err.toString());
//           }.bind(this)
//         });
//   },



//   render:function(){
//     var itdata=this.state.getDat.map(function(data){
//       return(
//        <ViewModel msgID={data._id} msgFrom={data.msgFrom} msgSubject={data.msgSubject} msgBody={data.d} />
//      )
//    });

//     return(
//   <div className="container-fluid">
//   <div className="row">
//   <div className="col-md-12">
//   <h2>Home</h2>
//   <button className="btn btn-warning" onClick={this.getData}>GetData</button>
//           <h1>{itdata}</h1>
//           <button className="btn btn-warning" onClick={this.updateData}>Update Data</button>
//           <h1>{this.state.updateData}</h1>
//           <button className="btn btn-warning" onClick={this.deleteData}>Delete Data</button>
//           <h1>{this.state.deleteData}</h1>

//   </div>
//   </div>
//   </div>
// );
// }
// })
render:function(){
    return(
  <div className="container-fluid">
  <div className="row">
  <div className="col-md-12">
  <h2>Home</h2>
  {this.props.params.aboutName}
  <p>
  <a className="btn btn-primary btn-large"> Home</a>
  </p>
  </div>
  </div>
  </div>
);
}
})
module.exports=Home;
