import React from "react";
import Error from "../Error/Error";
import { InputStyle, LabelStyle } from "./style";

const Input = ({label, type, value, onChange, name, error, onBlur }) => {
    return (
        <div style={{marginBottom: '1rem'}}>
            <LabelStyle htmlFor={ name }>{ label }</LabelStyle>
            <InputStyle 
                type={ type }
                id={ name }
                name={ name }
                value={ value }
                onChange={ onChange }
                onBlur={ onBlur }
            />
            <Error error={ error } />
        </div>
    )
}

export default Input
