import React, { useEffect, useState } from "react";

import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";
import products from "../data/_products";

function ItemListContainer() {
  const [toggle, setToggle] = useState(false);

  console.log("Renderizando");

  useEffect(() => {
    console.log("Obteniendo items de la base de datos");
  }, [toggle] );
  

  return (
    <>
      <FlexWrapper>
        {
          products.map( (item) => <Item title={item.titel} price={item.price} detail={item.detail} img={item.img} /> )
        }
      </FlexWrapper>
    <button onClick={ () => setToggle(!toggle)}>Toggle State</button>
    </>
  );
}

export default ItemListContainer;
