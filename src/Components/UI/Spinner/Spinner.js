import React from 'react';
import styles from './Spinner.module.css';

const Spinner = (props)=>{
  let classes = [styles.Loader];
  if(props.big){
    classes.push(styles.Big);
  }
  return (
    <div className={classes.join(' ')}>Loading...</div>
  )
}

export default Spinner;