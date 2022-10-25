import {DUMMY_MEALS} from "./dataMeals";
import classes from './AvailableMeals.module.css'
import Meal from "./Meal";

const AvailableMeals = props => {
    const meals = DUMMY_MEALS.map(meal => <Meal {...meal} key={meal.id} />)
    return (
        <section className={classes.meals}><ul>{meals}</ul></section>
    )
}

export default AvailableMeals;