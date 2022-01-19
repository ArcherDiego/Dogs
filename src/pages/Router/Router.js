import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Home from "../Home/Home"

const Router = () => {
    return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
        <Footer />
    </BrowserRouter>
    )
}

export default Router
