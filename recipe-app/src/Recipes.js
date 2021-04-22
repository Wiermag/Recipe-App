import React from "react";
import style from "./recipes.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.text}>
        <ul className={style.list}>
          {ingredients.map((el) => (
            <li>{el.text}</li>
          ))}
          <p>{calories}</p>
        </ul>
        <img className={style.image} src={image} alt="" />
      </div>
    </div>
  );
};

export default Recipe;
