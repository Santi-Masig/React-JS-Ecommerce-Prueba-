const databaseItems = [
  {
    id: 1,
    title: "Lenovo IdeaPad 3",
    price: 500,
    detail:
      "Fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.",
    category: "Notebook",
    stock: 5,
    img: "https://http2.mlstatic.com/D_NQ_NP_813169-MLA49250964514_032022-O.webp",
  },
  {
    id: 2,
    title: "Dell Inspiron",
    price: "ARG: " + 149.999,
    detail:
      "Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.",
    category: "Notebook",
    stock: 6,
    img: "https://http2.mlstatic.com/D_NQ_NP_805951-MLA50865156506_072022-O.webp",
  },
  {
    id: 3,
    title: "Apple MacBook Pro",
    price: 1587,
    detail:
      "El chip M1 de Apple redefine al Macbook Pro de 13 pulgadas.(1) Viene con una CPU de 8 núcleos que permite un rendimiento óptimo en los flujos de trabajo más exigentes, como fotografía, programación y edición de video.",
    category: "Apple|MacBook",
    stock: 3,
    img: "https://http2.mlstatic.com/D_NQ_NP_621087-MLA52537211561_112022-O.webp",
  },
];

function getItems () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(databaseItems);
        }, 2000);
    });
}

export default getItems;