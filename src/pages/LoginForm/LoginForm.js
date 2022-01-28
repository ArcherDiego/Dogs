import React from "react"
import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import LoginFormStyle from "./style"

const LoginForm = () => {

    const username = useForm()
    const password = useForm()

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
                <Button>Join</Button>
            </form>
            <Link to="register">Register</Link>
        </LoginFormStyle>
    )
}

export default LoginForm
