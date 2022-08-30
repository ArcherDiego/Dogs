import React from "react"
import { PASSWORD_RESET } from "../../api/api"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import Error from "../../components/Error/Error"
import Input from "../../components/Input/Input"
import useFetch from "../../hooks/useFetch"
import useForm from "../../hooks/useForm"
import ResetPasswordStyle from "./style"
import Head from "../../components/Head/Head"

const LoginResetPassword = () => {
    const [login, setLogin] = React.useState('')
    const [key, setKey] = React.useState('')
    const password = useForm()
    const {loading, error, request} = useFetch()
    const navigate = useNavigate()

    React.useEffect(() => {
        const params = URLSearchParams(window.location.search)
        const login = params.get('login')
        const key = params.get('key')
        if(key) setKey(key)
        if(login) setLogin(login)
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefalut()
        if(password.validate()){
            const {url, options} = PASSWORD_RESET({
                login,
                key,
                password: password.value
            })
            const {response} = await request(url, options)
            if(response.ok) navigate('/login')
        }
    }

    return (
        <ResetPasswordStyle>
            <Head title='Reset Password' />
            <div>
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <Input label='Reset your password' type='password' name='password' {...password} />
                    {loading ? (
                    <Button disabled>Reseting...</Button>
                    ) : (
                    <Button>Reset</Button>
                    )}
                </form>
                <Error error={error} />
            </div>
        </ResetPasswordStyle>
    )
}

export default LoginResetPassword
