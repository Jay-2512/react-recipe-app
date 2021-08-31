import React from 'react';
import style from '../recipe.module.css';

const Recipe = (props) => {
    return (
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <img className={style.image} src={props.image} alt="" />
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>

            <p className={style.calories}>Calories : {props.calories}</p>
        </div>
    );
}

export default Recipe;