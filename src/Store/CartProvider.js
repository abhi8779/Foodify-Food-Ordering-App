import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ITEM_ADDED") {
    const updatedTotalAmount =
      state.totalAmount + action.value.price * action.value.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );
    // console.log(existingCartItemIndex);

    const existingCartItem = state.items[existingCartItemIndex];
    console.log(existingCartItem);

    let updatedStates;

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.value.amount,
      };
      updatedStates = [...state.items];
      updatedStates[existingCartItemIndex] = updatedCartItem;
    } else {
      updatedStates = state.items.concat(action.value);
    }

    return {
      items: updatedStates,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "ITEM_REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedStates;
    if (existingCartItem.amount === 1) {
      updatedStates = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedStates = [...state.items];
      updatedStates[existingCartItemIndex].amount--;
    }

    return {
      items: updatedStates,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCardAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCardAction({ type: "ITEM_ADDED", value: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCardAction({ type: "ITEM_REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
