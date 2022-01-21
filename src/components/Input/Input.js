import React from "react";
import { InputStyle } from "./style";

const Input = ({label, type, value, setValue, ...props}) => {

    const handleChange = ({target}) => {
        setValue(target.value)
    }

    return (
        <label>
            { label }
            <InputStyle type={ type } value={ value } onChange={ handleChange } {...props} />
        </label>
    )
}

export default Input
