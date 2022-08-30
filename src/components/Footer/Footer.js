import { FooterStyle } from "./style"
import { ReactComponent as Dogs } from "../../assets/image/dogs-footer.svg"

const Footer = () => {
    return (
        <FooterStyle>
            <Dogs />
            <p>Dogs. Some rights reserved.</p>
        </FooterStyle>
    )
}

export default Footer
