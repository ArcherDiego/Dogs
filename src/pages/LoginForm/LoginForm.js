import React from "react"
import { Navigate } from "react-router-dom"
import Error from "../../components/Error/Error"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import useForm from "../../hooks/useForm"
import { UserContext } from "../../useContext"
import { LoginFormStyle, LinkForgot, LinkBtn, RegisterStyle } from "./style"
import Head from "../../components/Head/Head"

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
            <Head title='Login' />
            <div>
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
                    <Error error={ error } />
                </form>
                <LinkForgot to="/forgot-password">Forgot password?</LinkForgot>
                <RegisterStyle>
                    <h3>Register</h3>
                    <p>Don't have an account yet? Register now.</p>
                    <LinkBtn to="/register">Register</LinkBtn>
                </RegisterStyle>
            </div>
        </LoginFormStyle>
    )
}

export default LoginForm
