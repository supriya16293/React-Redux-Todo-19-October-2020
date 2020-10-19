import React, { Component } from 'react';
import './../App.css';
import Content from './Content';

class AboutUs extends Component
{

render() {
  const heading = {
    float: 'left',
    color:'black',
    marginTop:'50px'
  };
    return (
        <div className="container">        
        <h1 style={heading}>About us</h1>
        <div className="content">        
        <Content />
      </div>
      </div>
      );
    }
  
  }
  
export default AboutUs;
