import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import LoginFormStyle from "./style"

const LoginForm = () => {

    const username = useForm()
    const password = useForm()

    const handleSubmit = (event) => {
        event.preventDefault();

        axios('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(json => {
            console.log(json)
            return json
        })
    }

    return (
        <LoginFormStyle>
            <h2>Login</h2>
            <form>
                <Input 
                    label="User" 
                    name="username" 
                    type="text" 
                    { ...username }
                />
                <Input 
                    label="Password" 
                    name="password" 
                    type="password" 
                    { ...password }
                />
                <Button onSubmit={ handleSubmit }>Join</Button>
            </form>
            <Link to="register">Register</Link>
        </LoginFormStyle>
    )
}

export default LoginForm
