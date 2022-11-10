import {DUMMY_MEALS} from "../dataMeals";
import classes from './AvailableMeals.module.css'
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";

const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map(({id, ...rest}) => <MealItem {...rest} id={id} key={id} />)
    return (
        <section className={classes.meals}>
            <Card><ul>{meals}</ul></Card>
        </section>
    )
}

export default AvailableMeals;