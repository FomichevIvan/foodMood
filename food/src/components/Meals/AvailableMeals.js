import {DUMMY_MEALS} from "./dataMeals";
import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const AvailableMeals = props => {
    const meals = DUMMY_MEALS.map(({id, ...rest}) => <MealItem {...rest} key={id} />)
    return (
        <section className={classes.meals}>
            <Card><ul>{meals}</ul></Card>
        </section>
    )
}

export default AvailableMeals;