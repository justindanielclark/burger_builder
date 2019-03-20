import React, {Component} from 'react';
import Aux from '../../Higher Order Components/Aux';
import Burger from './Burger/Burger';

class BurgerBuilder extends Component {
  render(){
    return (
      <Aux>
        <Burger></Burger>
      </Aux>
    );
  }
}

export default BurgerBuilder;