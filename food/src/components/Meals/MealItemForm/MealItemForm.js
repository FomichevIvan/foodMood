import classes from './MealItemForm.module.css'
import Input from "../../UI/Input/Input";

const MealItemForm = props => {
    return (
        <form className={classes.form}>
            <Input label='Amount'
                   input={{
                       id: 'amount',
                       min: 1,
                       max: 99,
                       step: 1,
                       defaultValue: 1,
                   }}
            />
            <button>+ Add</button>

        </form>
    )
}

export default MealItemForm