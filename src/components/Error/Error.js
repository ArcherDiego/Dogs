import ErrorStyle from "./style";

const Error = ({ error }) => {

    if(!error) return null;
    return (
        <ErrorStyle>{ error }</ErrorStyle>
    )
}

export default Error
