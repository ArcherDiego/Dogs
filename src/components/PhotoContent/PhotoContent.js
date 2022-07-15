import { Link } from "react-router-dom"
import PhotoComments from "../PhotoComments/PhotoComments"
import { PhotoContentStyle, DetailsStyle, AuthorStyle } from "./style"

const PhotoContent = ({data}) => {
    const {photo, comments} = data

    return(
        <PhotoContentStyle>
            <div>
                <img src={photo.src} alt={photo.title} />
            </div>
            <DetailsStyle>
                <div>
                    <AuthorStyle>
                        <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
                        <span>{photo.acessos}</span>
                    </AuthorStyle>
                    <h1>
                        <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <ul>
                        <li>{photo.peso} Kg</li>
                        <li>{photo.idade} anos</li>
                    </ul>
                </div>
            </DetailsStyle>
            <PhotoComments id={photo.id} comments={comments} />
        </PhotoContentStyle>
    )
}

export default PhotoContent
