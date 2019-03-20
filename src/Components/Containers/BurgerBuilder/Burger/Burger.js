import React from 'react';
import style from './Burger.module.css';
import Ingredient from '../Ingredients/Ingredient';

const Burger = (props) => (
  <div className={style.container}>
    <Ingredient type='bun-top'></Ingredient>
    <Ingredient type='cheese'></Ingredient>
    <Ingredient type='meat'></Ingredient>
    <Ingredient type='bun-bottom'></Ingredient>
  </div>
)

export default Burger;