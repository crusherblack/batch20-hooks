import React from "react";

const Card = ({ product, addProductToCart }) => {
  const { id, title, imageUrl } = product;

  return (
    <div className="card mb-3">
      <img
        style={{
          height: "250px",
          objectFit: "cover",
        }}
        className="card-img-top"
        src={imageUrl}
        alt="Card image cap"
      />
      <div className="card-body">
        <p
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          className="card-text text-center font-weight-bold"
        >
          {title}
        </p>
      </div>
      <div className="card-footer bg-white">
        <button
          onClick={() => addProductToCart(id)}
          className="btn btn-primary btn-block"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
