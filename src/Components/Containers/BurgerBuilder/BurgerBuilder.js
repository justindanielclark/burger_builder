import React, {Component} from 'react';
import Aux from '../../Higher Order Components/Aux';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import IngredientProfile from '../../../Objects/IngredientProfile';

const INGREDIENT_PROFILES = {
  pickles: new IngredientProfile(.35, 0, 2),
  lettuce: new IngredientProfile(.35, 0, 2),
  tomato: new IngredientProfile(.5, 0, 2),
  cheese: new IngredientProfile(.5, 0, 3),
  meat: new IngredientProfile(1.35, 0, 3)
}
const BASE_PRICE = 1.50;

class BurgerBuilder extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: {
        pickles: 2,
        lettuce: 1,
        tomato: 1,
        cheese: 2,
        meat: 3
      },
      totalPrice: 0
    }
  }
  componentDidMount(){
    this.setState({totalPrice: calculateTotalPrice(this.state.ingredients)});
  }
  render(){
    return (
      <Aux>
        <Burger 
          ingredients={this.state.ingredients}
        />
        <BuildControls 
          ingredients={this.state.ingredients} 
          profiles={INGREDIENT_PROFILES}
          price={this.state.totalPrice}
          onBuildControlClick={this.onBuildControlClick.bind(this)}
        />
      </Aux>
    );
  }
  onBuildControlClick(targetIngredient, value){
    let IngredientValue = this.state.ingredients[targetIngredient];
    const IngredientMin = INGREDIENT_PROFILES[targetIngredient].min;
    const IngredientMax = INGREDIENT_PROFILES[targetIngredient].max 
    const stateCopy = Object.assign(this.state.ingredients);

    IngredientValue+=value;

    if(IngredientValue<IngredientMin){IngredientValue=IngredientMin}
    else if(IngredientValue>IngredientMax){IngredientValue=IngredientMax}

    stateCopy[targetIngredient] = IngredientValue;
    const totalPrice = calculateTotalPrice(stateCopy);

    this.setState({ingredients: stateCopy, totalPrice: totalPrice});
  }
}

function calculateTotalPrice(ingredients){
  const ingredientKeys = Object.keys(ingredients);
  const totalPrice = ingredientKeys.map(el=>{
    return INGREDIENT_PROFILES[el].price*ingredients[el]
  }).reduce((acc, cur)=>{return acc+=cur}, 0);
  return (totalPrice+BASE_PRICE).toFixed(2);
}

export default BurgerBuilder;