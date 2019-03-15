import React, { Component } from 'react';
import SideBar from './SideBar';

// send formulations to sidebar

class FormulationContainer extends Component {
  state = { 
    formulas: this.props.formulas,
    selectedFormulaId: undefined
   }


  render() { 
    return (  
      
      <div className="sidebar">
      {console.log("formulas state at FormulationContainer", this.state.formulas)}
        {/* <SideBar formulas={this.state.formulas}/> */}
      </div>
    );
  }
}
 
export default FormulationContainer;