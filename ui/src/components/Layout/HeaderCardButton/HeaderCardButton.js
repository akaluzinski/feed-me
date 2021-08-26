import classes from "./HeaderCardButton.module.css";
import { useContext } from "react";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCardButton = (props) => {

  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.reduce((curr, item) => { return curr + item.amount }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
