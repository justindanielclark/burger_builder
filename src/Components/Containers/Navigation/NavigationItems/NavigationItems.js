import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => {
  return(
    <ul className={styles.NavigationItems}>
      <NavigationItem linkAddress='#' active>Burger Builder</NavigationItem>
      <NavigationItem linkAddress='#'>Checkout</NavigationItem>
    </ul>
  );
}

export default NavigationItems;