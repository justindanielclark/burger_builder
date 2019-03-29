import React from 'react';
import styles from './BuildControl.module.css';

const BuildControl = (props) => {
  const label = props.label.substring(0,1).toUpperCase()+props.label.substring(1,props.label.length);
  const lessDisabled = props.num === props.ingredientProfile.min;
  const moreDisbaled = props.num === props.ingredientProfile.max;


  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{label}</div>
      <button 
        className={styles.Less} 
        onClick={()=>props.onBuildControlClick(props.label, -1)}
        disabled = {lessDisabled}
      >Less</button>
      <button 
        className={styles.More} 
        onClick={()=>props.onBuildControlClick(props.label, +1)}
        disabled = {moreDisbaled}
      >More</button>
    </div>
  );
}

export default BuildControl;