import FeedModal from "../FeedModal/FeedModal"
import FeedPhotos from "../FeedPhotos/FeedPhotos"
import { FeedStyle } from "./style"

const Feed = () => {
    return(
        <FeedStyle>
            <FeedPhotos />
            <FeedModal />
        </FeedStyle>
    )
}

export default Feed
