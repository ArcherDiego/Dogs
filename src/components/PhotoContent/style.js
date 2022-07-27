import styled from "styled-components";
import BlackView from "../../assets/image/visualizacao-black.svg"

export const PhotoContentStyle = styled.div`
    margin: auto;
    height: 36rem;
    border-radius: 0.2rem;
    background: white;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.8);
    animation: scaleUp 0.3s forwards;

    @keyframes scaleUp {
        to{
            opacity: inherit;
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

    @media (max-width: 64rem) {
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
        grid-template-columns: minmax(20rem, 40rem);
    }
`;

export const ImgStyle = styled.div`
    grid-row: 1/4;

    @media (max-width: 64rem) {
        grid-row: 1;
    }
`;

export const DetailsStyle = styled.div`
    padding: 2rem 2rem 0 2rem;

    ul{
        display: flex;
        font-size: 1.125rem;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    li{
        margin-right: 2rem;

        &::before{
            content: '';
            display: inline-block;
            height: 20px;
            width: 2px;
            margin-top: 5px;
            margin-right: 0.5rem;
            position: relative;
            top: 3px;
            background: #333;
        }
    }
`;

export const AuthorStyle = styled.p`
    opacity: 0.8;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:hover{
        text-decoration: underline;
    }

    span::before{
        content: '';
        display: inline-block;
        width: 16px;
        height: 10px;
        margin-right: 0.5rem;
        background: url('${BlackView}');
    }
`;
