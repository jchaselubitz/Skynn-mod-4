import React, { Component } from 'react';
import Data from '../data.js'
import SideBar from './SideBar';

// send formulations to sidebar

class FormulationContainer extends Component {
  state = {
    formulas: [],
    selectedFormulaId: undefined
   }

   componentDidMount () {
    this.setState({formulas: Data})
  }
  

  render() { 
    return (  
      
      <div className="sidebar">
      {console.log("formulas state at FormulationContainer", this.state.formulas)}
        <SideBar formulas={this.state.formulas}/>
      </div>
    );
  }
}
 
export default FormulationContainer;