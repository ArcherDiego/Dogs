import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../Home/Home"
import LoginForm from "../LoginForm/LoginForm"
import LoginRegister from "../LoginRegister/LoginRegister"
import LoginForgotPassword from "../LoginForgotPassword/LoginForgotPassword"
import LoginResetPassword from "../LoginResetPassword/LoginResetPassword"
import UserFeed from "../UserFeed/UserFeed";
import UserStatistics from "../UserStatistics/UserStatistics";
import UserPhotoPost from "../UserPhotoPost/UserPhotoPost";
import { UserStorage } from "../../useContext";
import Photo from "../../components/Photo/Photo";
import UserProfile from "../../components/UserProfile/UserProfile";
import NotFound from "../../components/NotFound/NotFound";

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
            <Route path="/account" element={ <UserFeed /> } />
            <Route path="/account/statistics" element={ <UserStatistics /> } />
            <Route path="/account/add-photos" element={ <UserPhotoPost /> } />
            <Route path="/photo/:id" element={ <Photo /> } />
            <Route path="/profile/:user" element={ <UserProfile /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
        <Footer />
    </UserStorage>
    )
}

export default Router
