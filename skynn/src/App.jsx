import React, { Component } from 'react';
import Data from './data.js'
import logo from './logo.svg';
import './App.css';
import FormulationContainer from './components/FormulationContainer';
import NavBar from './components/NavBar';

class App extends Component {

  state = {
    formulas: [],
    
  }

  componentDidMount () {
    this.setState({formulas: Data})
  }
  

  render() {
    return (
      <div className="App">
       {/* <nav><NavBar /></nav> */}
       <div className="formulation-container">
       {console.log("formulas state at App", this.state.formulas)}
        <FormulationContainer formulas={this.state.formulas} />
       </div>
      </div>
    );
  }
}

export default App;
