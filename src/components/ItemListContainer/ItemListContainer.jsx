import React, { useEffect, useState } from "react";

import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemListContainer() {
  const [toggle, setToggle] = useState(false);

  console.log("Renderizando");

  useEffect(() => {
    console.log("Obteniendo items de la base de datos");
  }, [toggle] );
  
  const productoA = {
    title: "Lenovo IdeaPad 3",
    price: 500,
    detail: `Fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.`,
    img: "https://http2.mlstatic.com/D_NQ_NP_813169-MLA49250964514_032022-O.webp",
  };
  const productoB = {
    title: "Dell Inspiron",
    price: "ARG: " + 149.999,
    detail:
      "Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.",
    img: "https://http2.mlstatic.com/D_NQ_NP_805951-MLA50865156506_072022-O.webp",
  };
  const productoC = {
    title: "Apple MacBook Pro",
    price: 1587,
    detail:
      "El chip M1 de Apple redefine al Macbook Pro de 13 pulgadas.(1) Viene con una CPU de 8 núcleos que permite un rendimiento óptimo en los flujos de trabajo más exigentes, como fotografía, programación y edición de video.",
    img: "https://http2.mlstatic.com/D_NQ_NP_621087-MLA52537211561_112022-O.webp",
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
          title={productoB.title}
          price={productoB.price}
          detail={productoB.detail}
          img={productoB.img}
        />
        <Item
          title={productoC.title}
          price={productoC.price}
          detail={productoC.detail}
          img={productoC.img}
        />
      </FlexWrapper>
    <button onClick={ () => setToggle(!toggle)}>Toggle State</button>
    </>
  );
}

export default ItemListContainer;
