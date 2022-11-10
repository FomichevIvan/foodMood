import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [isBtnHighlighted, setIsBtnHighlighted] = useState(false)
    const crtCtx = useContext(CartContext)
    const {items} = crtCtx;
    useEffect(() => {
        if(items.length) {
            setIsBtnHighlighted(true)
            const timer = setTimeout(() => {
                setIsBtnHighlighted(false)
            }, 300)
            return () => clearTimeout(timer)
        } else {
            return
        }

    }, [items])
    const numberOfCartItems = items.reduce((acc, curr) => acc + curr.amount, 0)
    const btnClasses = `${classes.button} ${isBtnHighlighted ? classes.bump : ''}`

    return <><button className={btnClasses} onClick={props.onClick} >
        <span className={classes.icon}><CartIcon/></span>
        <span>Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>


</>

}

export default HeaderCartButton;