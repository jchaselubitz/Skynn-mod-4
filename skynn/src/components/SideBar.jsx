import React, { Component } from 'react';
import FormulationListItem from './FormulationListItem'

class SideBar extends Component {

handleClick = (formulaId) => {
  this.props.setSelected(formulaId)
}
  
renderList = () => {
  return this.props.formulas.map(formula => <FormulationListItem formulaName={formula.name} formulaId={formula.id} handleClick={this.handleClick} /> )
 }

  render() { 
    return ( 
      <div>
        {this.renderList()}
      </div>
     );
  }
}
 
export default SideBar;