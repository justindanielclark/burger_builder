import React from 'react';
import styles from './Logo.module.css';
import logoPath from '../../../Assets/Images/burger-logo.png'

const Logo = (props) => {
  return (
    <div className={styles.Logo} style={{height: props.height}}>
      <img src={logoPath} alt='Burger Builder Logo'/>
    </div>
  )
}

export default Logo;