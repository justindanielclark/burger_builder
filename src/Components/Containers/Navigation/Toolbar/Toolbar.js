import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props)=>{
  return (
    <div className={styles.Toolbar}>
      <div 
        className={[styles.ToolbarItem, styles.MenuContainer].join(' ')}
        onClick={()=>props.click()}
      >
        <div className={styles.Menu}></div>
      </div>
      <div className={styles.ToolbarItem}>
        <Logo height='45px'/>
      </div>
      <div className={[styles.ToolbarItem, styles.NavContainer].join(' ')}>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </div>
  )
}

export default Toolbar;