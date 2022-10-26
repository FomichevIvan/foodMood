import classes from './MealItem.module.css'
import Input from "../../UI/Input/Input";
import MealItemForm from "../MealItemForm/MealItemForm";

const MealItem = ({name, description, price}) => {

    const price$ = `$${price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price$}</div>
            </div>
            <div>
              <MealItemForm/>
            </div>
        </li>
    )
}

export default MealItem;