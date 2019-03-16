import React, { Component } from 'react';

class FormulationDetails extends Component  {

  isFavorite = () => {
    return this.props.favourites.find(formula => this.props.formula === formula)
  }
  render () {
    return ( 
      <div>
        <h1>{this.props.formula.name}</h1>
        <img src={this.props.formula.image}/>
        <h4> Ingredients: </h4>
        {this.props.formula.ingredients.map(ingredient => <p>{ingredient}</p>)}
        <h4> tags: </h4>
        {this.props.formula.tags.map(tag => <p>{tag}</p>)}
        <h4> Conditions: </h4>
        {this.props.formula.conditions.map(condition => <p>{condition}</p>)}
        <input type="checkbox" id="favourite" onChange={(event) => this.props.handleCheck(event, this.props.formula)} checked={!!this.isFavorite()}/>
      </div>
     );
  }

}
 
export default FormulationDetails;