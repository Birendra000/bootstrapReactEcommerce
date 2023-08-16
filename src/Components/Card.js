import React from "react";
import { useDispatch } from "react-redux";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  function Additem_cart() {
    return dispatch({ type: "ADD_TO_CART", payload: product });
  }
  return (
    <>
      <div className="col mb-4">
        <div className="card h-100">
          <img src={product.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <button
            type="button"
            className="btn btn-danger "
            style={{ height: "44px" }}
            onClick={Additem_cart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
