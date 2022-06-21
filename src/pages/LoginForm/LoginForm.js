import React from "react"
import { Link, Navigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import LoginFormStyle from "./style"
import { UserContext } from "../../useContext"

const LoginForm = () => {

    const username = useForm()
    const password = useForm()
    
    const { userLogin, login, error, loading } = React.useContext(UserContext)
    if(login === true) return <Navigate to='/account' />

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
        }
    }

    return (
        <LoginFormStyle>
            <h2>Login</h2>
            <form onSubmit={ handleSubmit }>
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
                {loading ? (
                <Button disabled>Loading ...</Button>
                ) : (
                <Button>Join</Button>
                )}
                {error && <p>{ error }</p>}
            </form>
            <Link to="/register">Register</Link>
        </LoginFormStyle>
    )
}

export default LoginForm
