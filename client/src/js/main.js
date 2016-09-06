var React = require('react');
var ReactDom=require('react-dom');
var {browserHistory, Route, Router, IndexRoute}=require('react-router');
var ReactDom= require ('react-dom');
var Home=require("./components/Home");
var Navbar=require("./components/NavBar");
var Form=require("./components/form1");

var MainComponent=React.createClass({
 render:function(){

        return(
                    <div>
                    <Navbar />
                    <br/><br/><br/><br/>
                  helloooooo
                  {this.props.children}
                    </div>

					);
    }
 });

ReactDom.render(<Router history={browserHistory}>
                    <Route path="/" component={MainComponent}>
                        <Route path="/home" component={Home}/>
                        <Route path="/form1" component={Form}/>
                     </Route>   
                </Router>,document.getElementById('app'));
            
