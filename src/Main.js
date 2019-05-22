import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./data/Home.js";
import Male from "./data/Male";
import Female from "./data/Female";
import './style.css';
import Australia from "./data/Australia";
import America from "./data/America";
class Main extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <h1 className="Title">Fetching Data Api</h1>
                    <nav className='navlink'>   
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/male">Male</NavLink></li>
                        <li><NavLink exact to="/female">Female</NavLink></li>
                        <li><NavLink exact to="/australia">Australia</NavLink></li>
                        <li><NavLink exact to="america">America</NavLink></li>
                    </ul>
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/male" component={Male}/>
                        <Route exact path="/female" component={Female}/>
                        <Route exact path="/australia" component={Australia}/>
                        <Route exact path="/america" component={America}/>
                    </div>
                </div>
                </HashRouter>
        );
        
    }
}

export default Main;