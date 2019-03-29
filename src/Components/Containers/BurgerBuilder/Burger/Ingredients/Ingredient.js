import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Ingredient.module.css';

class Ingredient extends Component {
  render(){
    let ingredient = null;
    switch(this.props.type){
      case 'bun-top': {
        ingredient = (
          <div className={style.bunTop}>
            <div className={style.bunTopShine}></div> 
          </div>
        );
        break;
      }
      case 'bun-bottom':{
        ingredient = (
          <div className={style.bunBottom}></div>
        )
        break;
      }
      case 'cheese':{
        ingredient = (
          <div className={style.cheese}>
            <div className={style.cheeseNode}></div>
            <div className={style.cheeseNode}></div>
          </div>
        );
        break;
      }
      case 'lettuce':{
        ingredient = (
          <div className={style.lettuce}>
            <div className={style.lettuceNode}></div>
            <div className={style.lettuceNode}></div>
          </div>
        );
        break;
      }
      case 'tomato':{
        ingredient = (<div className={style.tomato}></div>);
        break;
      }
      case 'meat':{
        ingredient = (<div className={style.meat}></div>);
        break;
      }
      case 'pickles':{
        ingredient = (<div className={style.pickles}></div>);
        break;
      }
      default: {
        ingredient = null;
      }
    }
    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default Ingredient;