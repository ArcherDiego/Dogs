import styled from "styled-components";

export const PhotoPostStyle = styled.section`
    ${({theme}) => theme.container}
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;

    @keyframes animeLeft {
        to{
            opacity: 1;
            transform: initial;
        }
    }
`;

export const PreviewStyle = styled.div`
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;

    &::after{
        content: '';
        display: block;
        height: 0;
        padding-bottom: 100%;
    }
`;

export const InputFileStyle = styled.input`
    margin-bottom: 1rem;
`;
