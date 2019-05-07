import React, {Component} from 'react';
import Aux from '../../Higher Order Components/Aux';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from './OrderSummary/OrderSummary';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
import IngredientProfile from '../../../Objects/IngredientProfile';
import axios from '../../../Axios/axios-orders';

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
        pickles: 0,
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 0,
      isPurchasable: true,
      isPurchasing: false
    }
  }
  render(){
    return (
      <Aux>
        <Modal
          show={this.state.isPurchasing} 
          click={this.onCancelClick}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            acceptClick={this.onAcceptClick}
            cancelClick={this.onCancelClick}
            price={this.state.totalPrice}/>
        </Modal>
        <Burger 
          ingredients={this.state.ingredients}
        />
        <BuildControls 
          ingredients={this.state.ingredients} 
          profiles={INGREDIENT_PROFILES}
          price={this.state.totalPrice}
          onBuildControlClick={this.onBuildControlClick}
          isPurchasable={this.state.isPurchasable}
          onOrderClick={this.onOrderClick}
        />
      </Aux>
    );
  }
  componentDidMount(){
    this.setState({totalPrice: calculateTotalPrice(this.state.ingredients)});
  }
  onBuildControlClick = (targetIngredient, value) => {
    let IngredientValue = this.state.ingredients[targetIngredient];
    const IngredientMin = INGREDIENT_PROFILES[targetIngredient].min;
    const IngredientMax = INGREDIENT_PROFILES[targetIngredient].max 
    const IngredientCopy = Object.assign(this.state.ingredients);

    IngredientValue+=value;

    if(IngredientValue<IngredientMin){IngredientValue=IngredientMin}
    else if(IngredientValue>IngredientMax){IngredientValue=IngredientMax}

    IngredientCopy[targetIngredient] = IngredientValue;
    const totalPrice = calculateTotalPrice(IngredientCopy);

    this.setState({ingredients: IngredientCopy, totalPrice: totalPrice, isPurchasable: calculatePurchasable(IngredientCopy)});
  }
  onOrderClick = () => {
    this.setState({isPurchasing: true});
  }
  onAcceptClick = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Justin Clark",
        address: {
          numerical: 15007,
          street1: 'Eucalyptus Ave',
          street2: null,
          city: 'Bellflower',
          state: 'CA',
          ZIP: 90706
        },
        email: 'justindanielclark@gmail.com',
        deliveryMethod: 'fastest'
      }
    };
    axios.post('/orders.json', order)
      .then(response=>{
        console.dir(response);
      }).catch(error=>{
        console.dir(error);
      });
  }
  onCancelClick = () => {
    this.setState({isPurchasing: false});
  }
}
function calculatePurchasable(ingredients){
  let values = Object.values(ingredients);
  return values.reduce((acc, cur)=>{return acc+=cur}, 0);
}
function calculateTotalPrice(ingredients){
  const ingredientKeys = Object.keys(ingredients);
  const totalPrice = ingredientKeys.map(el=>{
    return INGREDIENT_PROFILES[el].price*ingredients[el]
  }).reduce((acc, cur)=>{return acc+=cur}, 0);
  return (totalPrice+BASE_PRICE).toFixed(2);
}

export default BurgerBuilder;