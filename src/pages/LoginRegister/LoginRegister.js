import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import LoginRegisterStyle from "./style"
import useForm from "../../hooks/useForm"

const LoginRegister = () => {
    const username = useForm()
    const email = useForm('email')
    const password = useForm('password')

    const handleSubmit = () => {

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
                    <Button>Join</Button>
                </form>
            </div>
        </LoginRegisterStyle>
    )
}

export default LoginRegister
