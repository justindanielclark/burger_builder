import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = (props) => {
  let ingredients = Object.keys(props.ingredients).map(el=>{
    return el.substring(0,1).toUpperCase()+el.substring(1,el.length);
  })
  .map((el, i)=>{
    return (
      <div className={styles.BuildControls}>
        <BuildControl label={el} key={el + i}/>
      </div>
    );
  });

  return ingredients;
}

export default BuildControls;