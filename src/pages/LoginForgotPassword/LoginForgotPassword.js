import { PASSWORD_LOST } from "../../api/api"
import Head from "../../components/Head/Head"
import Button from "../../components/Button/Button"
import Error from "../../components/Error/Error"
import Input from "../../components/Input/Input"
import useFetch from "../../hooks/useFetch"
import useForm from "../../hooks/useForm"
import ForgotPasswordStyle from "./style"

const LoginForgotPassword = () => {
    const login = useForm()
    const {data, loading, error, request} = useFetch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const {url, options} = PASSWORD_LOST({
            login: login.value, 
            url: window.location.href.replace('forgot-password', 'reset-password')
        })
        const json = await request(url, options)
        console.log(json)
    }

    return (
        <ForgotPasswordStyle>
            <Head title='Forgot Password' />
            <div>
                <h1>Forgot Password</h1>
                {data ? (
                <p style={{color: '#4c1'}}>{data}</p>
                ) : (
                <form onSubmit={handleSubmit}>
                    <Input label='User/E-mail' type='text' name='login' {...login} />
                    {loading ? (<Button disabled>Sending...</Button>) : (<Button>Send E-mail</Button>)}
                </form>
                )}
                <Error error={error} />
            </div>
        </ForgotPasswordStyle>
    )
}

export default LoginForgotPassword
