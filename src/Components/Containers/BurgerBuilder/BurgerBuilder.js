import React, {Component} from 'react';
import Aux from '../../Higher Order Components/Aux';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: {
        pickles: 0,
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
      }
    }
  }
  render(){
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls ingredients={this.state.ingredients}></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;