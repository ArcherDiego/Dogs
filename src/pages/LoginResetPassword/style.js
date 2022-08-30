import styled from "styled-components";
import Login from "../../assets/image/login.jpg"

const ResetPasswordStyle = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;

    &:before{
        display: block;
        content: '';
        background: url(${Login}) no-repeat center center;
        background-size: cover;
    }

    @keyframes animeLeft {
        to{
            opacity: 1;
            transform: initial;
        }
    }

    h1{
        font-family: ${({theme}) => theme.fontFamily.secund};
        line-height: 1;
        font-size: 3rem;
        margin: 1rem 0;
        position: relative;
        z-index: 1;
    }

    h1::after{
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background-color: #fb1;
        position: absolute;
        bottom: 5px;
        left: -5px;
        border-radius: .2rem;
        z-index: -1;
    }

    form{
        margin-bottom: 2rem;
        max-width: 30rem;
    }

    @media (max-width: 40rem) {
        padding: 1rem;
        grid-template-columns: 1fr;

        &:before{
            display: none;
        }

        form{
            max-width: 100%;
        }
    }
`;

export default ResetPasswordStyle
