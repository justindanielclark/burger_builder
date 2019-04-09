import React from 'react';
import styles from './Modal.module.css';
import Aux from '../../Higher Order Components/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props)=>{

  return (
    <Aux>
      <Backdrop 
        show={props.show}
        click={props.click}
      />
      <div 
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' :  'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
}

export default modal;