import React from "react"
import FeedModal from "../FeedModal/FeedModal"
import FeedPhotos from "../FeedPhotos/FeedPhotos"
import { FeedStyle } from "./style"

const Feed = () => {
    const [modalPhoto, setModalPhoto] = React.useState(null)

    return(
        <FeedStyle>
            {modalPhoto && <FeedModal photo={ modalPhoto } setModalPhoto={ setModalPhoto } />}
            <FeedPhotos setModalPhoto={ setModalPhoto } />
        </FeedStyle>
    )
}

export default Feed
