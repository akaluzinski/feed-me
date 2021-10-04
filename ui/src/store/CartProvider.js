import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = [...state.items, action.item];
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
  return defaultCartState;
};

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
      dispatchCartAction({type: 'ADD', item })
  };
  const removeItemFromCartHandler = (id) => {
      dispatchCartAction({type: 'REMOVE', id})
  };

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
