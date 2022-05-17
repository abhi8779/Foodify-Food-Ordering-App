import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
import { useRef } from "react";
import { useState } from "react";

const MealItemForm = (props) => {
  const numberInputRef = useRef(1);

  const [amountIsValid, setAmountIsValid] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = numberInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return setAmountIsValid(false);
    }
    props.onAddTocart(enteredAmountNumber);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <Input
        input={{
          ref: numberInputRef,
          id: Math.random().toString(),
          type: "number",
          step: 1,
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
        label="Amount"
        type="number"
      />
      <div>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
      </div>
    </form>
  );
};

export default MealItemForm;
