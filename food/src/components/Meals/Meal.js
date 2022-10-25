const Meal = props => {
    const {name, description, price} = props
    return (
        <li>
            <span>{name}</span>
            <span>{description}</span>
            <span>{price}</span>
        </li>
    )
}

export default Meal;