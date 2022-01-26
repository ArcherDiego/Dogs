import React from "react";
import { InputStyle, LabelStyle, ErrorStyle } from "./style";

const Input = ({label, type, value, setValue, name, ...props}) => {

    const handleChange = ({target}) => {
        setValue(target.value)
    }

    return (
        <div style={{marginBottom: '1rem'}}>
            <LabelStyle htmlFor={ name }>{ label }</LabelStyle>
            <InputStyle 
                type={ type } 
                id={ name } 
                name={ name } 
                value={ value } 
                onChange={ handleChange } 
                {...props} 
            />
            <ErrorStyle>Error</ErrorStyle>
        </div>
    )
}

export default Input
