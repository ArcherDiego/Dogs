import React from "react"
import useFetch from "../../hooks/useFetch"
import { COMMENT_POST } from "../../api/api"
import Error from "../Error/Error"
import { ReactComponent as Enviar } from "../../assets/image/enviar.svg"

const PhotoCommentsForm = ({id, setComments}) => {
    const [comment, setComment] = React.useState('')
    const {request, error} = useFetch()

    const handleChange = ({target}) => {
        setComment(target.value)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        const {response, json} = await request(url, options)
        if(response.ok){
            setComment('')
            setComments((sendComment) => [...sendComment, json])
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <textarea 
                id="comment"
                name="comment"
                placeholder="Make a comment..." 
                value={comment} 
                onChange={handleChange} 
            />
            <button>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    )
}

export default PhotoCommentsForm
