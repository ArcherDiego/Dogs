import React from "react"
import { UserContext } from "../../useContext"
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm"
import { ListCommentsStyle } from "./style"

const PhotoComments = (props) => {
    const [comments, setComments] = React.useState(() => props.comments)
    const commentsSection = React.useRef(null)
    const {login} = React.useContext(UserContext)

    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    },[comments])

    return(
        <>
            <ListCommentsStyle ref={commentsSection}>
                {comments.map(comment => 
                <li key={comment.comment_ID}>
                    <strong>{comment.comment_author}: </strong>
                    <span>{comment.comment_content}</span>
                </li>
                )}
            </ListCommentsStyle>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments
