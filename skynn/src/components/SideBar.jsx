import React, { Component } from 'react';
import FormulationListItem from './FormulationListItem'

class SideBar extends Component {

renderList = () => {
  return this.props.formulas.map(formula => <FormulationListItem formulaName={formula.name} formulaId={formula.Id} />) // 
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