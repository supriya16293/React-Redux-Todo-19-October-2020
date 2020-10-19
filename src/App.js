import React, { Component } from 'react';
import { connect } from 'react-redux';
import  NavBar from './components/NavBar';

import './App.css';
import {BrowserRouter,Route } from 'react-router-dom'
import AboutUs from './components/AboutUs';
import Policy from './components/Policy';
import Services from './components/Services';
import Home from './components/Home'
const styles = {
    navbar : {
      listStyle: 'none',
      padding: '-10px 0px',
    },
    navbarRight: {
      float: 'right',
      top: '-40px',

    },
    left_side : {
      width: '49%',
      float: 'left',
      backgroundColor: '#ccc',
      height: '50px',
    },
    right_side : {
      width: '49%',
      marginLeft: '3px',
      float: 'right',
      backgroundColor: '#ccc',
      height: '50px'
    },
}

import { restoreTodo } from './actions';

class App extends Component {
  
  constructor(props) {
    super(props);
    var oldState=sessionStorage.getItem('state');
    if(oldState)
    {
      this.props.restoreTodo(oldState);
    }
    
   
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <ul style={styles.navbar} className="navigasi NavText">
            <li>
            <NavBar />
              <Route exact path='/' component={AboutUs} > </Route>
              <Route exact path='/Home' component={Home} > </Route>
              <Route path='/aboutus' component={AboutUs}></Route>
              <Route path='/policy' component={Policy}></Route>
              <Route path='/services' component={Services}></Route>
             
            </li>
          </ul>
        </div>
      </div>
      </BrowserRouter>
    );
  }

}



const mapDispatchToProps = dispatch => ({
  restoreTodo: newState => dispatch(restoreTodo(newState))
});

export default connect(null, mapDispatchToProps)(App);

