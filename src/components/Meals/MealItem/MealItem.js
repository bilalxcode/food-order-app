import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";

import CartContext from "../../../store/cart-context";


function MealItem(props) {
    // const price = `$${props.price.toFixed(2)}`;

    const CartCtx=useContext(CartContext);

    const addToCartHandler=amount=>{

      CartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    };
    return (
    <div>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price +'$'}</div>
        </div>
        <div>
        <MealItemForm onAddToCart={addToCartHandler}  />
                </div>
      </li>
    </div>
  );
}

export default MealItem;
