import React, { useState, useEffect } from "react";

import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";
import getItems from "../../services/mockAsyncService";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  getItems().then( (respuesta)=> {
    console.log(respuesta);
    setProducts(respuesta);
  });
  return (
    <>
      <FlexWrapper>
       {products.map((item) => (
        <Item 
        key={item.title} 
        title={item.title} 
        price={item.price} 
        detail={item.detail} 
        img={item.img}  
        />
       ))}
      </FlexWrapper>
  
    </>
  );
}

export default ItemListContainer;
