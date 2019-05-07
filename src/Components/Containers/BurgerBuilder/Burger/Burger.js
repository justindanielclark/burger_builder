import React from 'react';
import style from './Burger.module.css';
import Ingredient from './Ingredients/Ingredient';

const Burger = (props) => {
  let RenderedIngredients = [];
  let Ingredients = props.ingredients
  let IngredientTypes = Object.keys(Ingredients);
  
  IngredientTypes.forEach(el=>{
    for(let i = 0; i < Ingredients[el]; i++){
      RenderedIngredients.push(<Ingredient type={el} key={el.toString() + i}/>)
    }
  });

  if(RenderedIngredients.length === 0){
    RenderedIngredients = (<div className={style.notice}>Please Add Ingredients</div>);
  }

  return(
    <div className={style.container}>
      <Ingredient type="bun-top"/>
      {RenderedIngredients}
      <Ingredient type="bun-bottom"/>
    </div>
  );
}

export default Burger;