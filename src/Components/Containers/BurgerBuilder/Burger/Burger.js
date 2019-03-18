import React from 'react';
import Aux from './../../../Higher Order Components/Aux';

const Burger = (props) => (
  <Aux>
    {props.children}
  </Aux>
)

export default Burger;