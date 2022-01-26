import ButtonStyle from "./style"

const Button = ({children, ...props}) => {
    return (
        <ButtonStyle { ...props }>{ children }</ButtonStyle>
    )
}

export default Button
