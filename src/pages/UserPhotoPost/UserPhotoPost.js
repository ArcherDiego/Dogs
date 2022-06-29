import React from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../useContext"

const UserPhotoPost = () => {
    const {login} = React.useContext(UserContext)

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <div>
            PhotoPost
        </div>
    )
}

export default UserPhotoPost
