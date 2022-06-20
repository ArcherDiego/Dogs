import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { TOKEN_POST, USER_GET } from "../../api"
import LoginFormStyle from "./style"

const LoginForm = () => {

    const username = useForm()
    const password = useForm()

    React.useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token){
            getUser(token)
        }
    }, [])

    const getUser = async (token) => {
        const { url, options } = USER_GET(token)
        const response = await axios(url, options)
        const json = await response.json()
        console.log(json)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(username.validate() && password.validate()){
            const { url, options } = TOKEN_POST({username: username.value, password: password.value})
            
            const response = await axios(url, options)
            const json = await response.json()
            window.localStorage.setItem('token', json.token)
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
                <Button>Join</Button>
            </form>
            <Link to="register">Register</Link>
        </LoginFormStyle>
    )
}

export default LoginForm
