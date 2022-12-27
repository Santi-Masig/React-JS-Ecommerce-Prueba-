import React from "react";


function Item(props) {
  const {title, price, detail, img} = props;
    return (
      <div id="prod" className="card w-96 bg-base-100 shadow-xl">
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
