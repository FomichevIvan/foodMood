import classes from './MealItemForm.module.css'
import Input from "../../UI/Input/Input";
import {useRef, useContext, useState} from 'react'
import CartContext from "../../../store/cart-context";

const MealItemForm = props => {
    const [err, setErr] = useState(false)
    const inputAmountRef = useRef();

    const onSubmitHandler = e => {
        setErr(false)
        e.preventDefault();
        const enteredValue = inputAmountRef.current.value;
        const enteredAmountNum = +enteredValue;

        if(!enteredValue.trim().length || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setErr(true)
            return;
        }
        props.onAddToCart(enteredAmountNum)
    }



    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input label='Amount'
                   ref={inputAmountRef}
                   input={{
                       id: 'amount',
                       min: 1,
                       max: 99,
                       step: 1,
                       defaultValue: 1,
                   }}
            />
            <button >+ Add</button>
            {err && <p>Enter correct amount (1-5)!</p>}

        </form>
    )
}

export default MealItemForm