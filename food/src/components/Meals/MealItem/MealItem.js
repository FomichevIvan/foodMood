import classes from './MealItem.module.css'
import Input from "../../UI/Input/Input";
import MealItemForm from "../MealItemForm/MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";
import cart from "../../Cart/Cart";

const MealItem = ({name, description, price, id}) => {

    const cartCtx = useContext(CartContext)
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
           id, name, price, amount
        })
    }

    const price$ = `$${price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price$}</div>
            </div>
            <div>
              <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;