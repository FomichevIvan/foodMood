import classes from './Input.module.css'
import {forwardRef} from "react";

const Input = forwardRef(({label, input: {id, ...input}}, ref) => {

    return <div className={classes.input}>
        <label htmlFor={id}>{label}</label>
        <input {...input} ref={ref}/>
    </div>
})

export default Input;