import React from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../useContext"

const UserStatistics = () => {
    const {login} = React.useContext(UserContext)

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <div></div>
    )
}

export default UserStatistics
