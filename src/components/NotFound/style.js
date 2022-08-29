import styled from "styled-components";

const NotFoundStyle = styled.div`
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
    margin-top: 2rem;

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
`;

export default NotFoundStyle
