import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginStyle from "./style"

const Login = () => {
    return (
        <LoginStyle>
            <h2>Login</h2>
            <Routes>
                <Route path="/" />
                <Route path="register" />
                <Route path="forgot-password" />
                <Route path="reset-passaword" />
            </Routes>
        </LoginStyle>
    )
}

export default Login
