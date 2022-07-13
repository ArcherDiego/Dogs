import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { PHOTO_POST } from "../../api/api"
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import UserAccount from "../Router/UserAccount"
import useFetch from "../../hooks/useFetch"
import useForm from "../../hooks/useForm"
import { UserContext } from "../../useContext"
import { PhotoPostStyle, PreviewStyle, InputFileStyle } from "./style"
import Error from "../../components/Error/Error"

const UserPhotoPost = () => {
    const name = useForm()
    const weigth = useForm('number')
    const age = useForm('number')
    const {data, error, loading, request} = useFetch()
    const navigate = useNavigate()

    const {login} = React.useContext(UserContext)
    const [img, setImg] = React.useState({})

    React.useEffect(() => {
        if(data) navigate('/account')
    }, [data, navigate])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('img', img.raw)
        formData.append('name', name.value)
        formData.append('weight', weigth.value)
        formData.append('age', age.value)

        const token = window.localStorage.getItem('token')
        const {url, options} = PHOTO_POST(formData, token)
        request(url, options)
    }

    const handleChange = ({target}) => {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        })
    }

    if(login === false || login === null) return <Navigate to='/login' />
    return(
        <>
            <UserAccount />
            <PhotoPostStyle>
                <form onSubmit={ handleSubmit }>
                    <Input label="Name" type="text" name="name" {...name} />
                    <Input label="Weight" type="text" name="weigth" {...weigth} />
                    <Input label="Age" type="text" name="age" {...age} />
                    <InputFileStyle type="file" name="img" id="img" onChange={ handleChange } />
                    {loading ? (<Button disabled>Loading ...</Button>) : (<Button>Post</Button>)}
                    <Error error={error} />
                </form>
                <div>
                    {img.preview && 
                    <PreviewStyle style={{backgroundImage: `url('${img.preview}')`}}></PreviewStyle>
                    }
                </div>
            </PhotoPostStyle>
        </>
    )
}

export default UserPhotoPost
