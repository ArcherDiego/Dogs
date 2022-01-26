import LoginFormStyle from "./style"
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <LoginFormStyle>
            <h2>Login</h2>
            <form>
                <Input label="User" name="username" type="text" />
                <Input label="Password" name="password" type="password" />
                <Button>Join</Button>
            </form>
            <Link to="register">Register</Link>
        </LoginFormStyle>
    )
}

export default LoginForm
