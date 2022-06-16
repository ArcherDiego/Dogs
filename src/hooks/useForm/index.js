import React from "react";

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um e-mail válido',
    } 
}

const useForm = (type) => {

    const [ value, setValue ] = React.useState('')
    const [ erro, setErro ] = React.useState(null)

    const validate = (value) => {
        if(type === false) return true
        if(value.lenght === 0) {
            setErro('Preencha um valor')
            return false
        } else if(types[type] && types[type].regex.test(value)) {
            setErro(types[type].message)
            return false
        }
        else {
            setErro(null)
            return true
        }
    }

    const onChange = ({target}) => {
        if(erro) validate(target.value)
        setValue(target.value)
    }
    
    return {
        value,
        setValue,
        onChange,
        erro,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm
