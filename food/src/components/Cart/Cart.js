import classes from './Cart.module.css'
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const cartCtx = useContext(CartContext)
    // console.log(cartCtx, 'cartCtx')

    const addItemHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const removeItemHandler = id => {
        cartCtx.removeItem(id)
    }

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = !!cartCtx.items.length
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => <CartItem key={item.id}
                                                                                                 name={item.name}
                                                                                                 price={item.price}
                                                                                                 amount={item.amount}
                                                                                                 onAdd={addItemHandler.bind(null, item)}
                                                                                                 onRemove={removeItemHandler.bind(null, item.id)}
    />)}</ul>

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>

        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button-alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;