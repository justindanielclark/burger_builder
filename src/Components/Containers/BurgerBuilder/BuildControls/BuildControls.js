import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = (props) => {
  let ingredients = Object.keys(props.ingredients)
  .map((el, i)=>{
    return(
      <BuildControl label={el} key={el.toString() + i} onBuildControlClick={props.onBuildControlClick}/>
    );
  });

  return(
    <div className={styles.BuildControls}>
      {ingredients}
    </div>
  )
}

export default BuildControls;