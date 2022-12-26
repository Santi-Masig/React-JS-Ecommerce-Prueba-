import React from "react";
import { ButtonChild } from "../button/Button";

function Item(props) {
  const {title, price, detail, img} = props;
    return (
    <div>
      <div>
        <img width="300px" src={img} alt="imagen"></img>
      </div>
      <h3>{title}</h3>
      <h4>{price}</h4>
      <p>{detail}</p>
      <ButtonChild>Ver detalles</ButtonChild>
    </div>
  );
}

export default Item;
