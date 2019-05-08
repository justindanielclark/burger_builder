import React from 'react';
import Logo from '../../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../Higher Order Components/Aux/Aux';

const SideDrawer = (props) => {
  let sideDrawerClassList = [styles.SideDrawer];
  props.isOpened ? sideDrawerClassList.push(styles.Open) : sideDrawerClassList.push(styles.Closed);
  return (
    <Aux>
      <Backdrop
        show={props.isOpened}
        click={props.click}
      />
      <div className={sideDrawerClassList.join(' ')}>
        <Logo height='11%'/>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;