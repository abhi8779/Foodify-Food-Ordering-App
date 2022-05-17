import styles from "./BackgroundImg.module.css";
import mealsImage from "../../img/meals.jpg";
const BackgroundImg = (props) => {
  return (
    <div className={styles["main-image"]}>
      <img src={mealsImage} alt="food-img"></img>
    </div>
  );
};
export default BackgroundImg;
