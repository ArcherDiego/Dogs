import React from "react"
import { UserContext } from "../../useContext"
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm"
import { PhotoCommentsStyle } from "./style"

const PhotoComments = (props) => {
    const [comments, setComments] = React.useState(() => props.sendComment)
    const {login} = React.useContext(UserContext)

    return(
        <PhotoCommentsStyle>
            <ul>
                {comments.map((comment) => 
                (<li key={comment.comment_ID}>
                    <b>{comment.comment_Author}</b>
                    <span>{comment.comment_content}</span>
                </li>)
                )}
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </PhotoCommentsStyle>
    )
}

export default PhotoComments
