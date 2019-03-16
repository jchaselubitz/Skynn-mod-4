import React, { Component } from 'react';

class AddNewFormulation extends Component {
  render() { 
    return ( 
      <form action="Submit">
      <input type="text" id="name" onChange={this.handleNameChange} value={this.state.name}/>
      <input type="text" id="image" onChange={this.handleImageChange} value={this.state.image}/>
      <input type="checkbox" id="ingredients" onChange={this.handleFieldChange} checked={this.state.ingredients}/>
      <input type="checkbox" id="tags" onChange={this.handleFieldChange} checked={this.state.tags}/>
      <input type="checkbox" id="conditions" onChange={this.handleFieldChange} checked={this.state.conditions}/>
      </form>
     );
  }
}
 
export default AddNewFormulation;