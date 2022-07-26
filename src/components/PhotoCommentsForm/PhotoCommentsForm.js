import React from "react"
import useFetch from "../../hooks/useFetch"
import { COMMENT_POST } from "../../api/api"
import Error from "../Error/Error"
import { ReactComponent as Enviar } from "../../assets/image/enviar.svg"
import { FormCommentsStyle, TextAreaStyle, ButtonStyle } from "./style"

const PhotoCommentsForm = ({id, setComments}) => {
    const [comment, setComment] = React.useState('')
    const {request, error} = useFetch()

    const handleChange = ({target}) => {
        setComment(target.value)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const {url, options} = COMMENT_POST(id, { comment })
        const {response, json} = await request(url, options)
        if(response.ok){
            setComment('')
            setComments((comments) => [...comments, json])
        }
    }

    return(
        <FormCommentsStyle onSubmit={handleSubmit}>
            <TextAreaStyle 
                id="comment"
                name="comment"
                placeholder="Make a comment..." 
                value={comment} 
                onChange={handleChange} 
            />
            <ButtonStyle>
                <Enviar />
            </ButtonStyle>
            <Error error={error} />
        </FormCommentsStyle>
    )
}

export default PhotoCommentsForm
