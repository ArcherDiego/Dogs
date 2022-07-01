import React from "react"
import { Routes, Route } from "react-router-dom"
import UserHeader from "../../components/UserHeader/UserHeader"
import UserFeed from "../UserFeed/UserFeed"
import UserStatistics from "../UserStatistics/UserStatistics"
import UserPhotoPost from "../UserPhotoPost/UserPhotoPost"

const User = () => {
    return(
        <section>
            <UserHeader />
            <Routes>
                <Route path="/account" element={ <UserFeed /> } />
                <Route path="/account/add-photos" element={ <UserPhotoPost /> } />
                <Route path="/account/statistics" element={ <UserStatistics /> } />
            </Routes>
        </section>
    )
}

export default User
