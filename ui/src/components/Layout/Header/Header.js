import { Fragment } from "react";

import mealsImage from '../../../assets/meals.jpeg';
import HeaderCardButton from "../HeaderCardButton/HeaderCardButton";
import classes from './Header.module.css';



const Header = (props) => {
  return <Fragment>
      <header className={classes.header}>
          <h1>FeedMe</h1>
          <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={classes.mainImage}>
          <img src={mealsImage} alt="A table with some delicious food"/>
      </div>
  </Fragment>;
};

export default Header;
