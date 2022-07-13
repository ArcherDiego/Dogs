import { FeedPhotosItemStyle, ViewStyle } from "./style"

const FeedPhotosItem = ({photo}) => {
    return(
        <FeedPhotosItemStyle>
            <img src={photo.src} alt={photo.title} />
            <ViewStyle>{photo.acessos}</ViewStyle>
        </FeedPhotosItemStyle>
    )
}

export default FeedPhotosItem
