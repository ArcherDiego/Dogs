import React from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../useContext"

const UserFeed = () => {
    const {login} = React.useContext(UserContext)

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <div>
            UserFeed
        </div>
    )
}

export default UserFeed
