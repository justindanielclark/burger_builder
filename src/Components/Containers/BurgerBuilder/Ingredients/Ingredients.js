import React from 'react';
import Aux from './../../../Higher Order Components/Aux';

const Ingredients = (props) => (
  <Aux>
    {props.children}
  </Aux>
)

export default Ingredients;