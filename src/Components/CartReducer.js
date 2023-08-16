const initialData = {
  cart_items: [],
};

const CartReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart_items: [...state.cart_items, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        cart_items: [
          ...state.cart_items.filter((items) => items != action.payload),
        ],
      };
    default:
      return state;
  }
};

export default CartReducer;
