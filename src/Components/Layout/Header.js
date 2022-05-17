import React from "react";
import BackgroundImg from "./BackgroundImg";

import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Foodify</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>

      <BackgroundImg />
    </React.Fragment>
  );
};
export default Header;
