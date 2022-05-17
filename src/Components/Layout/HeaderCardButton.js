import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCardButton.module.css";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((acc, curItem) => {
    return acc + curItem.amount;
  }, 0);

  const [bump, setBump] = useState("");
  useEffect(() => {
    // guards claw
    if (cartCtx.items.length === 0) return;
    setBump(styles.bump);
    const timer = setTimeout(() => {
      setBump("");
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.totalAmount]);

  const btnClasses = `${styles.button} ${bump}`;

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCardButton;
