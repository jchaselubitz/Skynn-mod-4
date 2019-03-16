import React, { Component } from 'react';
import Data from '../data.js'
import SideBar from './SideBar';
import FormulationDetails from './FormulationDetails'

// send formulations to sidebar

class FormulationContainer extends Component {
  state = {
    formulas: [],
    selectedFormulaId: undefined,
    favourites: []
   }

   componentDidMount () {
    this.setState({formulas: Data})
  }

// ===========LIST FUNCTIONS=============
  setSelected = (selectedFormula) => {
    this.setState({
      selectedFormulaId: selectedFormula
    })
  }

// ===========DETAILS FUNCTIONS=============

filterFormula = () => {
  return this.state.formulas.find(formula => formula.id === this.state.selectedFormulaId) //
}

addRemoveToFavorites = (event, formula) => {
  if (event.target.checked === true) {
    this.setState({
      favourites: [...this.state.favourites, formula]
    })
  } else {
    this.setState({
      favourites: this.state.favourites.filter(formula => this.props.formula === formula)
    })
  }
}
// ===========ADD NEW FUNCTIONS=============




// ===========RENDER=============
  render() { 
    return (  
      
      <div className="sidebar">
        <SideBar formulas={this.state.formulas} setSelected={this.setSelected} favourites={this.state.favourites}/>
        {this.state.selectedFormulaId !== undefined &&  <FormulationDetails formula={this.filterFormula()} handleCheck={this.addRemoveToFavorites} favourites={this.state.favourites} />}
      </div>
    );
  }
}
 
export default FormulationContainer;