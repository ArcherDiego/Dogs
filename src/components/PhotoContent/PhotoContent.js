import React from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../useContext"
import Image from "../Image/Image"
import PhotoComments from "../PhotoComments/PhotoComments"
import PhotoDelete from "../PhotoDelete/PhotoDelete"
import { PhotoContentStyle, ImgStyle, DetailsStyle, AuthorStyle, SingleContentStyle, SingleImgStyle, SingleDetailsStyle } from "./style"

const PhotoContent = ({data, single}) => {
    const user = React.useContext(UserContext)
    const {photo, comments} = data

    return(
    <>
        {single ? (
            <SingleContentStyle>
                <SingleImgStyle>
                    <Image src={photo.src} alt={photo.title} />
                </SingleImgStyle>
                <SingleDetailsStyle>
                    <div>
                        <AuthorStyle>
                            {user.data && user.data.username === photo.author ? (
                            <PhotoDelete id={photo.id} />
                            ) : (
                            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
                            )}
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
                </SingleDetailsStyle>
                <PhotoComments single={true} id={photo.id} comments={comments} />
            </SingleContentStyle>
            ) : (
            <PhotoContentStyle>
            <ImgStyle>
                <Image src={photo.src} alt={photo.title} />
            </ImgStyle>
            <DetailsStyle>
                <div>
                    <AuthorStyle>
                        {user.data && user.data.username === photo.author ? (
                        <PhotoDelete id={photo.id} />
                        ) : (
                        <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
                        )}
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
            <PhotoComments single={false} id={photo.id} comments={comments} />
        </PhotoContentStyle>
        )}
    </>
    )
}

export default PhotoContent
