import React, { Component } from 'react';
import Data from './data.js'
import logo from './logo.svg';
import './App.css';
import FormulationContainer from './components/FormulationContainer';
import NavBar from './components/NavBar';

class App extends Component {

  state = {
    formulas: [],
    selectedFormulaId: undefined
  }

  componentDidMount () {
    Data.map((formula) => this.setState({formulas: [...formulas, formula]}))
  }
  

  render() {
    return (
      <div className="App">
       <nav><NavBar /></nav>
       <div className="formulation-container">
       {this.populateFormulationContainer()}
        <FormulationContainer formulas={this.state.formulas} />
       </div>
      </div>
    );
  }
}

export default App;
