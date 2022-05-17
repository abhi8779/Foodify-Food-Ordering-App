import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context.js";

const MealItem = (props) => {
  const cartCxt = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    const meal = { ...props.mealData, amount: amount };
    cartCxt.addItem(meal);
  };

  const price = `$${props.mealData.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.mealData.name}</h3>
        <div className={styles.description}>{props.mealData.description}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <div>
        <MealItemForm onAddTocart={addItemToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
