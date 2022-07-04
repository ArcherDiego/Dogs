import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../Home/Home"
import LoginForm from "../LoginForm/LoginForm"
import LoginRegister from "../LoginRegister/LoginRegister"
import LoginForgotPassword from "../LoginForgotPassword/LoginForgotPassword"
import LoginResetPassword from "../LoginResetPassword/LoginResetPassword"
import UserAccount from "./UserAccount";
import UserFeed from "../UserFeed/UserFeed";
import UserStatistics from "../UserStatistics/UserStatistics";
import UserPhotoPost from "../UserPhotoPost/UserPhotoPost";
import { UserStorage } from "../../useContext";

const Router = () => {
    return (
    <UserStorage>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <LoginForm /> } />
            <Route path="/register" element={ <LoginRegister /> } />
            <Route path="/forgot-password" element={ <LoginForgotPassword /> } />
            <Route path="/reset-password" element={ <LoginResetPassword /> } />
            <Route path="/account" element={ <UserAccount /> }>
                <Route path="/account/feed" element={ <UserFeed /> } />
                <Route path="/account/statistics" element={ <UserStatistics /> } />
                <Route path="/account/add-photos" element={ <UserPhotoPost /> } />
            </Route>
        </Routes>
        <Footer />
    </UserStorage>
    )
}

export default Router
