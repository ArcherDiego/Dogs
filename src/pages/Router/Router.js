import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../Home/Home"
import LoginForm from "../LoginForm/LoginForm"
import LoginRegister from "../LoginRegister/LoginRegister"
import LoginForgotPassword from "../LoginForgotPassword/LoginForgotPassword"
import LoginResetPassword from "../LoginResetPassword/LoginResetPassword"

const Router = () => {
    return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
        <Routes>
            <Route path="/login" element={ <LoginForm /> } />
            <Route path="/login/register" element={ <LoginRegister /> } />
            <Route path="/login/forgot-password" element={ <LoginForgotPassword /> } />
            <Route path="/login/reset-password" element={ <LoginResetPassword /> } />
        </Routes>
        <Footer />
    </BrowserRouter>
    )
}

export default Router
