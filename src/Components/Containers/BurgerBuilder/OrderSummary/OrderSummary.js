import React from 'react';
import styles from './OrderSummary.module.css';

import Aux from '../../../Higher Order Components/Aux';
import Button from '../../../UI/Button/Button';

const OrderSummary = (props)=>{
  const ingredientSummary = Object.keys(props.ingredients)
    .map(el => {
      return (
        <li key={el}>
          {el.substring(0,1).toUpperCase() + el.substring(1,el.length) + ": " + props.ingredients[el]}
        </li>
      )
    });


  return(
    <Aux>
      <h3>Your Order</h3>
      <p className={styles.OrderDetails}>A Delicious Burger With The Following Ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p className={styles.OrderDetails}>Total Price: ${props.price}</p>
      <p className={styles.OrderDetails}>Proceed to Checkout?</p>
      <div className={styles.ButtonContainer}>
        <Button 
          type='Success' 
          click={props.acceptClick}
          >ACCEPT</Button>
        <Button 
          type='Danger' 
          click={props.cancelClick}>DECLINE</Button>
      </div>
    </Aux>
  )
};

export default OrderSummary;