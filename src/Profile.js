import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
    <div>
         <p>{this.props.nama}</p>
         <img src="two.jpg"></img> 
    </div>
      
    ); 
}}
export default Profile;    