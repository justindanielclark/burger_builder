import React from 'react';
import style from './Burger.module.css';
import Ingredient from '../Ingredients/Ingredient';

const Burger = (props) => {
  let Ingredients = Object.keys(props.ingredients)
    .map(IngredientType => {
      return [...Array(props.ingredients[IngredientType])].map((_, i)=>{
        return <Ingredient type={IngredientType} key={IngredientType + i}/>
      });
    })
    .reduce((arr, el)=>{return arr.concat(el)}, []);
  console.log(Ingredients.toString());
  if(Ingredients.length === 0){
    console.log('Hit');
    Ingredients = (<p>Please Add Ingredients</p>);
  }

  return(
    <div className={style.container}>
      <Ingredient type="bun-top"/>
      {Ingredients}
      <Ingredient type="bun-bottom"/>
    </div>
  );
}

export default Burger;