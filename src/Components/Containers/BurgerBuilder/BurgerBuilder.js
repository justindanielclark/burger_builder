import React, {Component} from 'react';
import Aux from '../../Higher Order Components/Aux';
import Burger from './Burger/Burger';
import Ingredients from './Ingredients/Ingredients';
import BuildControls from './BuildControls/BuildControls';

class BurgerBuilder extends Component {
  render(){
    return (
      <Aux>
        <Burger></Burger>
        <Ingredients></Ingredients>
        <BuildControls></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;