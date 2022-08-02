import React from "react"
import FeedModal from "../../components/FeedModal/FeedModal"
import FeedPhotos from "../../components/FeedPhotos/FeedPhotos"
import { Navigate } from "react-router-dom"
import { UserContext } from "../../useContext"
import UserAccount from "../Router/UserAccount"
import { FeedStyle } from "./style"

const UserFeed = () => {
    const [modalPhoto, setModalPhoto] = React.useState(null)
    const {login} = React.useContext(UserContext)

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <>
            <UserAccount />
            <FeedStyle>
                {modalPhoto && <FeedModal photo={ modalPhoto } setModalPhoto={ setModalPhoto } />}
                <FeedPhotos setModalPhoto={ setModalPhoto } />
            </FeedStyle>
        </>
    )
}

export default UserFeed
