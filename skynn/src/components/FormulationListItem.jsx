import React, { Component } from 'react';

const FormulationListItem = (props) => {

  return ( 
    <>
    <h4 onClick={() => props.handleClick(props.formulaId)}> {props.formulaName}
      </h4>
    </>
   );
}
 
export default FormulationListItem;