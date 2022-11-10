import classes from './Header.module.css'
import foodImg from '../../assets/food.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return (
        <>
            <header className={classes.header}>
                <h1>FoodMood</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImg}/>
            </div>
        </>
    )
}

export default Header;