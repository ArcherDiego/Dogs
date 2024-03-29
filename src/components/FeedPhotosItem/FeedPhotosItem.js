import Image from "../Image/Image"
import { FeedPhotosItemStyle, ViewStyle } from "./style"

const FeedPhotosItem = ({photo, setModalPhoto}) => {
    const handleClick = () => {
        setModalPhoto(photo)
    }

    return(
        <FeedPhotosItemStyle onClick={ handleClick }>
            <Image src={photo.src} alt={photo.title} />
            <ViewStyle>{photo.acessos}</ViewStyle>
        </FeedPhotosItemStyle>
    )
}

export default FeedPhotosItem
