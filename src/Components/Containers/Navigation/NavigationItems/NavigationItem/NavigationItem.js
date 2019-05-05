import React from 'react';
import styles from './NavigationItem.module.css'

const NavigationItem = (props) => {
  return (
    <li className={styles.NavigationItem}>
      <a 
        href={props.linkAddress}
        className={props.active ? styles.active : null}
      >
        {props.children}
      </a>
    </li>
  );
}

export default NavigationItem;