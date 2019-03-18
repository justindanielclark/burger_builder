import Aux from '../Higher Order Components/Aux';
import styles from './Layout.module.css';
import React from 'react';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div> 
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>  
)

export default layout;