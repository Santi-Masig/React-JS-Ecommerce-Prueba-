import React from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";
import getItems from "../../services/mockAsyncService";

function ItemList(props) {
  return (
    <FlexWrapper>
      {props.products.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          price={item.price}
          detail={item.detail}
          img={item.img}
        />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;
