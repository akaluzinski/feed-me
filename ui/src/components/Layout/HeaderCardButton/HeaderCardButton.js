import classes from "./HeaderCardButton.module.css";

import CartIcon from '../../Cart/CartIcon/CartIcon';

const HeaderCardButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}><CartIcon></CartIcon></span>
      <span>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default HeaderCardButton;
