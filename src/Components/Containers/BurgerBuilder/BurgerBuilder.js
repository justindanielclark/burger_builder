import React, {Component} from 'react';
import Aux from '../../Higher Order Components/Aux';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: {
        pickles: 1,
        lettuce: 1,
        tomato: 2,
        cheese: 1,
        meat: 1
      }
    }
  }
  render(){
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls ingredients={this.state.ingredients} onBuildControlClick={this.onBuildControlClick.bind(this)}></BuildControls>
      </Aux>
    );
  }
  onBuildControlClick(targetIngredient, value){
    let newIngredients = Object.assign(this.state.ingredients);
    newIngredients[targetIngredient] += value;
    if(newIngredients[targetIngredient] < 0){
      newIngredients[targetIngredient] = 0;
    }
    this.setState({ingredients: newIngredients});
  }
}

export default BurgerBuilder;