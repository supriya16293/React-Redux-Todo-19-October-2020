import React, { Component } from 'react';
import './../App.css';
import Content from './Content';

class Services extends Component
{
 
render() {
  const heading = {
    float: 'left',
    color:'black',
    marginTop:'50px'
  };
    return (
        <div className="container">   
        <h1 style={heading}>Services</h1>     
        <div className="content">
        <Content />
      </div>
      </div>
      );
    }
  
  }
  
export default Services;
