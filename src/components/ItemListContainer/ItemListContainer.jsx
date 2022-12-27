import React from 'react'
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";

import imgbuzo from "../../assets/images/buzo.jpg"

function ItemListContainer() {
  const productoA = {
    title: "Remera",
    price: 400,
    detail: "La mejor remera del mercado",
    img: "https://piet.com.ar/wp-content/uploads/piet-remera-negra-cuadrado-blanco-01.jpg",
  };
  return (
    <>
      <FlexWrapper>
        <Item
          title={productoA.title}
          price={productoA.price}
          detail={productoA.detail}
          img={productoA.img}
        />
        <Item
          title="Buzo"
          price={400}
          detail="El mejor buzo del mercado"
          img={imgbuzo}
        />
        <Item
          title="Zapatillas"
          price={200}
          detail="Las mejores zapatillas del mercado"
          img="/assets/img/zapatilla.jpg"
        />
        <Item />
      </FlexWrapper>
    </>
  );
}

export default ItemListContainer;