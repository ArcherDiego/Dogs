import React from "react"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import Error from "../../components/Error/Error"
import useForm from "../../hooks/useForm"
import useFetch from "../../hooks/useFetch"
import { UserContext } from "../../useContext"
import { USER_POST } from "../../api/api"
import LoginRegisterStyle from "./style"

const LoginRegister = () => {
    const username = useForm()
    const email = useForm('email')
    const password = useForm()

    const { userLogin } = React.useContext(UserContext)
    const { loading, error, request } = useFetch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        })
        const { response } = await request(url, options)
        if(response.ok) userLogin(username.value, password.value)
    }

    return (
        <LoginRegisterStyle>
            <div>
                <h2>Register</h2>
                <form onSubmit={ handleSubmit }>
                    <Input
                        label="User"
                        name="username"
                        type="text"
                        { ...username }
                    />
                    <Input
                        label="E-mail"
                        name="email"
                        type="email"
                        { ...email }
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        { ...password }
                    />
                    {loading ? (<Button disabled>Loading...</Button>) : <Button>Register</Button>}
                    <Error error={ error }/>
                </form>
            </div>
        </LoginRegisterStyle>
    )
}

export default LoginRegister
