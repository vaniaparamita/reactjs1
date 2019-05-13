import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home.js"

class main extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <h1 className="Title">Fetching Data Api</h1>
                    <ul className="Header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                    </div>
                </div>
                </HashRouter>
        );
        
    }
}

export default main;