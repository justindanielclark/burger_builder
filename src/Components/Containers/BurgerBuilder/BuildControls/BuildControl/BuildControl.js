import React from 'react';
import styles from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.label}>{props.label}</div>
      <button>Less</button>
      <button>More</button>
    </div>
  );
}

export default BuildControl;