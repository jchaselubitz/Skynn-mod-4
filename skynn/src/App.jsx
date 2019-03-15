import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import FormulationContainer from './components/FormulationContainer';
import NavBar from './components/NavBar';

class App extends Component {

  state = {  
  }

  render() {
    return (
      <div className="App">
       {/* <nav><NavBar /></nav> */}
       <div className="formulation-container">
        <FormulationContainer/>
       </div>
      </div>
    );
  }
}

export default App;
