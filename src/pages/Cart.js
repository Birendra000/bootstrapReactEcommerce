import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const items_in_cart = useSelector((store) => store.cartStore.cart_items);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container mx-auto my-5 p-5">
        <table className="table table-striped text-center align-middle table-bordered">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Product Image</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items_in_cart.map((items, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={items.thumbnail} style={{ height: 250 }} />
                  </td>
                  <td>
                    <h4>Title:{items.title}</h4>
                    <p>Brand:{items.brand}</p>
                    <p>Category:{items.category}</p>
                    <p>{items.description}</p>
                    <p>Price:{items.price}</p>
                    <p>Discount:{items.discountPercentage}</p>
                    <p></p>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: items })
                      }
                      class="btn btn-dark "
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Cart;
