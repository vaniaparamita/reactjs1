import React, { Component } from 'react';
import './App.css';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

class Profile extends Component {
  constructor(props){
    super(props);

  }
  notify(){
    toast.notify( 
      'Welcome to My Profile!', {position: 'top-left', duration : 2000} 
    );
  }

  render(){
    return(
    <div>
         <button onClick={this.notify}>Test</button>
         <p>{this.props.nama}</p>
         <br></br>
         <img src="two.jpg"></img> 
    </div>
      
    ); 
}}
export default Profile;    