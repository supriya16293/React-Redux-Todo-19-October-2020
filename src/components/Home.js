import { black } from 'material-ui/styles/colors';
import React, { Component }from 'react'
import './../App.css';
import {Line} from 'react-chartjs-2';
import { MapsLocalFlorist } from 'material-ui/svg-icons';

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
    
    heading : {
        float: 'left',
        color:black,
        marginTop:'50px'
    },  
    right_side : {
      width: '49%',
      marginLeft: '3px',
      float: 'right',
      backgroundColor: '#ccc',
      height: '50px'
    },
    formAdd: {
      width: '200px',
      height: '30px',
      fontSize: '16px'
    },
    btnAdd: {
      width:'100px',
      height: '30px',
      marginLeft: '10px',
    },
    content:{
      marginTop: '60px',
    float: 'left'
    }
}

// const state = {
//   datasets: [
//     {
//       label: 'Equation',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

class Home extends Component{
  constructor(props) {
    super(props);
 
    this.state = {

      stateData:{ datasets: [
        {
          label: 'Equation',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        }
      ]}
    };
  }
  generateGraph(){
    const x = Array(20).fill(0).map((val, index) => (index - 10));

    var eq=document.getElementById("input").value;
    if(eq)
    {
      const digits = "0123456789";
      let found = true;

      if(eq.includes("^")) {
        const index = eq.indexOf("^")
        let endIndex = index;
        while(found) {
          if(digits.includes(eq[endIndex+1])) 
          {
            endIndex++
          } 
          else 
          {
            found = false
          }
        }
        const pow = Number(eq.substring(index+1,endIndex+1))
        var powString = `Math.pow(X,${pow})`;
        eq = eq.replace(eq.substring(index-1,endIndex+1) , powString);
      }
      console.log(eq);
      const point = x.map(X => ({
        x: X,
        y: eval(eq)
      }));

      console.log(point);
      //state.datasets[0].data=point;
      var newState=this.state.stateData;
      newState.datasets[0].data=point;

      this.setState(prevState => ({
        stateData : newState
      }));
    }
    else
    {
      alert('Plese enter a value');
    }
  }
    render(){
      console.log('render');
    return (
        <div className="container">
          <h1 style={styles.heading}></h1>           
          <div style={styles.content} >  
            Y=<input type="text" id="input" style={styles.formAdd} placeholder="Y ="/>
            <button style={styles.btnAdd} onClick={() => this.generateGraph()}>Generate</button>
          </div>
         
          <br></br>
          <br></br>
          <Line style={styles.chartcss} 
          data={this.state.stateData}
          
        />
        </div>
    )
    }
}

export default Home