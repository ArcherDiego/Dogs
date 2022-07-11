import React from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../useContext"
import UserAccount from "../Router/UserAccount"
import { FeedStyle } from "./style"

const UserFeed = () => {
    const {login} = React.useContext(UserContext)

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <>
            <UserAccount />
            <FeedStyle>
                UserFeed
            </FeedStyle>
        </>
    )
}

export default UserFeed
