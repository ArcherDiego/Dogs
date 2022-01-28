import React from "react";
import { InputStyle, LabelStyle, ErrorStyle } from "./style";

const Input = ({label, type, value, onChange, name, erro, onBlur }) => {
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
            {erro && <ErrorStyle>{ erro }</ErrorStyle>}
        </div>
    )
}

export default Input
