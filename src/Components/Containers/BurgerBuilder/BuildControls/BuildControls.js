import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = (props) => {
  let Profiles = props.profiles;
  let Ingredients = props.ingredients;
  let IngredientTypes = Object.keys(Ingredients);
  let RenderedIngredientControls = IngredientTypes.map((el, i)=>{
    return (
      <BuildControl 
        key={el}
        label={el}
        num={Ingredients[el]}
        onBuildControlClick={props.onBuildControlClick} 
        ingredientProfile={Profiles[el]}
      />
    );
  });

  return(
    <div className={styles.BuildControls}>
      <p>Price: ${props.price}</p>
      {RenderedIngredientControls}
    </div>
  )
}

export default BuildControls;