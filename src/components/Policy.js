import Content from './Content';
import React, { Component } from 'react';

class Policy extends Component
{

render() {
    const heading = {
        float: 'left',
        color:'black',
        marginTop:'50px'
      };
    return (
        <div className="container">        
        <h1 style={heading}>Policy</h1>
        <div className="content">
        <Content />
      </div>
      </div>
      );
    }
  
  }
  
export default Policy;