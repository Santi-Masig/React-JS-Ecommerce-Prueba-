
import React, { useState } from "react";
import ToggleButton from "../toggleButton/ToggleButton";

import "./item.css";

function Item({title, price, detail, img}) {

  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    console.log("Clck btn");
    setIsActive(!isActive);
  };

  let classToggleBtn;
  if (isActive) 
    classToggleBtn = "item-card_favicon favorite";
    else 
  classToggleBtn = "item-card_favicon";


  return (
    <div id="prod" className="card w-96 bg-base-100 shadow-xl">
      <ToggleButton icon="♡" />
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{detail}</p>

        <div className="card-actions">
          <div className="badge badge-outline">${price}</div>
          <button className="btn btn-primary">Ver detalles</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
